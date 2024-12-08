const express = require('express')
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient()

const router = express.Router();


router.get('/', (req, res) => {
    res.send('API funcionando')
})


router.post('/items', async (req, res) => {
    const { name, sessionId, message } = req.body

    try {
        const item = await prisma.item.create({
            data: { name, sessionId, message }
        })
        res.status(200).json(item)
    } catch (error) {
        console.log(error)

        if(error.code === 'P2002' && error.meta.target.includes('sessionId')){
        res.status(400).json({ error:'sessionId já está em uso. Escolha outro'})

        }else{
        res.status(500).json({ error: 'Erro ao criar item.' })

        }   
    }
})


router.get('/items', async(req, res) =>{
    try {
        const items = await prisma.item.findMany();
        res.status(200).json({ data: items });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar os itens.'})
    }
})

router.get('/items/:id', async (req, res) =>{
    const { id } = req.params

    try {
        const item = await prisma.item.findUnique({ where: { id:parseInt(id)}})
        if(!item) {
            return res.status(404).json( { error: 'Item não encontrado'})
        }
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json( { error: 'Erro ao buscar item.'})
    }
})


router.put('/items/:id', async (req, res)=> {
    const { id } = req.params
    const { name, sessionId, message } = req.body

    try {
        const existingItem = await prisma.item.findFirst({
            where: {
                sessionId,
                NOT: { id: parseInt(id)}
            }
        })
        if(existingItem) {
            return res.status(400).json({ error:'sessonId já esta em uso'})
        }

        const updatedItem = await prisma.item.update({
            where: { id: parseInt(id) },
           data: { name, sessionId, message } 
        })

        res.status(200).json(updatedItem)
    } catch (error) {
        res.status(500).json( { error: 'Erro ao atualizar item'} )
    }
})


router.delete('/items/:id', async(req, res) =>{
    const { id } = req.params

    try {
        await prisma.item.delete({ where: { id: parseInt(id) } })
       res.status(200).send(`Item ${id} excluido com sucesso!`)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o item'})
    }
})





module.exports  = router

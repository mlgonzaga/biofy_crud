# CRUD de Mensagens 

Este é um projeto  de CRUD (Create, Read, Update, Delete) para gerenciamento de mensagens. A aplicação permite aos usuários cadastrar, listar, atualizar e excluir mensagens, com um layout responsivo e funções essenciais.

# Tecnologias usadas

## Frontend
ReactJs com Vite, TailwindCSS, React Router, Axios

## Backend
NodeJs, Express para as API's, Prisma ORM, Banco de dados Postgres, Docker

# Funcionalidades
<b>Cadastro de Mensagens:</b> Registre novas mensagens fornecendo um nome, um sessionId e o conteúdo da mensagem.
<b>Listagem de Mensagens:</b> Visualize todas as mensagens cadastradas.
<b>Atualização de Mensagens:</b> Edite os dados de uma mensagem existente.
<b>Exclusão de Mensagens:</b> Remova mensagens que não são mais necessárias.
<b>Acesso à Documentação:</b> Link direto para a documentação completa da API.

# Interface Inicial

A tela inicial contém três opções principais:

Cadastrar Mensagem: Redireciona para o formulário de cadastro.
Listar Mensagens: Exibe todas as mensagens cadastradas.
Documentação: Link para visualizar a documentação da aplicação.

# Como utilizar a aplicação
## Tenha o Docker instalado na sua máquina
Caso use Windows acesso o link: https://www.docker.com/products/docker-desktop/
Caso use Linux acesse o link a seguir e siga as intruções de acordo com sua distro: https://docs.docker.com/desktop/setup/install/linux/

Após isso clone este repositório na sua máquina com o comando:
git clone https://github.com/mlgonzaga/biofy_crud.git

E execute o comando:
docker-compose up
Este processo pode demorar um pouco então será necessário aguardar o processo ser concluido.

Ao terminar o processo acesse pelo seu navegador http://localhost:5173 e irá se deparar com essa tela:
</br>

<img src="inicial.png" alt="Tela inicial">


# Exemplos de chamadas da API

Você pode verificar exemplos de chamadas acessando o link:
</br>
https://documenter.getpostman.com/view/24184302/2sAYBd6nFm



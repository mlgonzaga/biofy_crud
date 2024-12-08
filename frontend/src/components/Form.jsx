import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [message, setMenssage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        name,
      sessionId,
      message,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/items`,
        payload
      );

      


      if (response.status === 200) {
        setIsModalOpen(true);
      } else {
        console.error("Erro ao criar a mensagem.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }

    console.log("Payload enviado:", payload);

}

    const closeModal = () => {
      setIsModalOpen(false);
      navigate("/");
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
        <h1 className="text-2xl font-bold text-slate-50 mb-6">
          Cadastrar Nova Mensagem
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-slate-800 p-6 rounded-md shadow-md"
        >
          <div>
            <label className="block text-slate-50 mb-2" htmlFor="nome">
              Nome:
            </label>
            <input
              id="nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full p-3 rounded-md bg-slate-700 text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-50 mb-2" htmlFor="session-id">
              Session ID:
            </label>
            <input
              id="session-id"
              type="text"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              placeholder="Digite o Session ID"
              className="w-full p-3 rounded-md bg-slate-700 text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-slate-50 mb-2" htmlFor="mensagem">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              value={message}
              onChange={(e) => setMenssage(e.target.value)}
              placeholder="Digite sua mensagem"
              className="w-full p-3 rounded-md bg-slate-700 text-slate-50 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-slate-700 text-center text-slate-50 py-3 rounded-md hover:bg-slate-800 transition duration-300"
          >
            Enviar
          </button>
        </form>

        <Modal
          title="Sucesso"
          message="Mensagem cadastrada com sucesso."
          isOpen={isModalOpen}
          onClose={closeModal}
        />

        <Link
          to="/"
          className="text-center text-blue-500 underline mt-4 hover:text-blue-400"
        >
          Voltar à página inicial
        </Link>
      </div>
    );
  };


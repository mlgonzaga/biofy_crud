import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditMessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState({ name: "", sessionId: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`);
        setMessage(response.data); // Preenche os campos com os dados da API
      } catch (error) {
        setError("Erro ao carregar mensagem.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/items/${id}`, message);
      navigate(`/message/${message.id}`);
    } catch (error) {
      setError("Erro ao atualizar mensagem.");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-50">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-50">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-2xl font-bold text-slate-50 mb-6">Editar Mensagem</h1>

      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 w-full max-w-2xl bg-slate-800 p-6 rounded-md shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-slate-50 font-semibold mb-2">Nome</label>
          <input
            id="name"
            type="text"
            value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            className="p-2 bg-slate-700 text-slate-50 rounded focus:outline-none focus:ring focus:ring-slate-500"
            placeholder="Nome"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sessionId" className="text-slate-50 font-semibold mb-2">Session ID</label>
          <input
            id="sessionId"
            type="text"
            value={message.sessionId}
            onChange={(e) => setMessage({ ...message, sessionId: e.target.value })}
            className="p-2 bg-slate-700 text-slate-50 rounded focus:outline-none focus:ring focus:ring-slate-500"
            placeholder="Session ID"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-slate-50 font-semibold mb-2">Mensagem</label>
          <textarea
            id="message"
            value={message.message}
            onChange={(e) => setMessage({ ...message, message: e.target.value })}
            className="p-2 bg-slate-700 text-slate-50 rounded focus:outline-none focus:ring focus:ring-slate-500"
            placeholder="Digite a mensagem"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate(`/message/${message.id}`)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

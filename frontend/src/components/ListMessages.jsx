import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`);
        setMessages(response.data.data);
      } catch (err) {
        setError("Erro ao carregar mensagens.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/items/${id}`);
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Erro ao excluir mensagem:", error);
    }
  };

  if (loading) {
    return <div>Carregando mensagens...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-2xl font-bold text-slate-50 mb-6">Mensagens Cadastradas</h1>

      <div className="flex flex-col gap-4 w-full max-w-2xl bg-slate-800 p-6 rounded-md shadow-md">
        {messages.length === 0 ? (
          <div className="text-slate-50">Nenhuma mensagem cadastrada.</div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className="bg-slate-700 p-4 rounded-md shadow-sm mb-4 text-slate-50 hover:bg-slate-600"
            >
              <h2 className="font-bold">{message.name}</h2>
              <p>
                <strong>Session ID:</strong> {message.sessionId}
              </p>
              <p>
                <strong>Mensagem:</strong> {message.message}
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Excluir
                </button>
                <button
                  onClick={() => navigate(`/edit-message/${message.id}`)} 
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Editar
                </button>
                <Link
                  to={`/message/${message.id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Detalhes
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <Link
        to="/"
        className="text-center text-blue-500 underline mt-4 hover:text-blue-400"
      >
        Voltar à página inicial
      </Link>
    </div>
  );
}

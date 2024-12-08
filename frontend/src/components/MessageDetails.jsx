import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function MessageDetails() {
  const { id } = useParams(); 
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessageDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`);
        setMessage(response.data); // Definindo a mensagem retornada
      } catch (err) {
        setError("Erro ao carregar os detalhes da mensagem.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessageDetails();
  }, [id]); // Reexecuta quando o id mudar

  if (loading) {
    return <div>Carregando detalhes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!message) {
    return <div>Mensagem não encontrada.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-2xl font-bold text-slate-50 mb-6">Detalhes da Mensagem</h1>

      <div className="bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-slate-50 font-bold">{message.name}</h2>
        <p className="text-slate-50"><strong>Session ID:</strong> {message.sessionId}</p>
        <p className="text-slate-50"><strong>Mensagem:</strong> {message.message}</p>
        <p className="text-slate-50"><strong>Criado em:</strong> {new Date(message.createdAt).toLocaleString()}</p>
      </div>

      <div>
      <Link
          to="/list"
          className="text-center text-blue-500 underline mt-4 hover:text-blue-400"
        >
          Voltar para Mensagens
        </Link>
      </div>
      
    </div>
  );
}

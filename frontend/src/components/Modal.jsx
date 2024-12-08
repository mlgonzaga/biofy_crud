export default function Modal({ title, message, isOpen, onClose }) {
    if (!isOpen) return null; 
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-slate-100 p-6 rounded-md shadow-md max-w-sm w-full text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-4">{title}</h2>
          <p className="text-slate-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="bg-slate-700 text-slate-50 py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }
  
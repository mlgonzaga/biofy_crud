import logo from "../assets/logo.png";
import { Link } from "react-router-dom"

export default function Home() {

 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <div className="flex flex-col gap-4 w-full  max-w-md bg-slate-800 p-6 rounded-md shadow-md text-center">
        <div className="flex items-center justify-center">
         <img className="rounded-[50%]  border object-contain w-40 mb-8" src={logo} alt="logo-biofy" />

        </div>

        <Link 
        to="/form"
        className= "cursor-pointer text-slate-50 bg-slate-700 w-full sm:w-auto h-16 p-4 text-base rounded-lg hover:bg-slate-800 transition duration-300 font-sans font-medium" 
        >
          Cadastrar nova mensagem
        </Link>

        <Link 
        to="/list"
        className= "cursor-pointer text-slate-50 bg-slate-700 w-full sm:w-auto h-16 p-4 text-base rounded-lg hover:bg-slate-800 transition duration-300 font-sans font-medium" 
        >
          Listar mensagens
        </Link>

        <a 
        className= "cursor-pointer text-slate-50 bg-slate-700 w-full sm:w-auto h-16 p-4 text-base rounded-lg hover:bg-slate-800 transition duration-300 font-sans font-medium" 
        href="https://web.postman.co/workspace/09ce6d64-1566-44aa-963b-edaba6993ea2/documentation/24184302-70eb896a-a0e9-4a61-aac0-3ef95cbd43a9" 
        target="_blanck" 
        >
          Ver documentação</a>
      </div>
    </div>
  );
}

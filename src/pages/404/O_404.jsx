import { useNavigate } from "react-router-dom";

export default function O_404() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-cyan-900 h-[100vh]">
      <p className="text-9xl text-center text-white">404</p>
      <button
        className="ml-8 p-2 text-white border-2 border-white hover:bg-blue-300 hover:border-blue-300"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </div>
  );
}

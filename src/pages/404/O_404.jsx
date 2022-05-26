import { useNavigate } from "react-router-dom";

export default function O_404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 justify-center items-center bg-black h-[100vh]">
      <p className="text-9xl text-center text-white">404</p>
      <button
        className="ml-8 p-2 text-white border-2 border-white hover:bg-neutral-500"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </div>
  );
}

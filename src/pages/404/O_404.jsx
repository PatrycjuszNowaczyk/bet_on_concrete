import { Link } from "react-router-dom";

export default function O_404() {
  return (
    <div className="flex justify-center items-center bg-cyan-900 h-[100vh]">
      <p className="text-9xl text-center text-white">404</p>
      <Link className="mx-1 text-white" to="..">I'll be back mthrfckrs</Link>
    </div>
  );
}

import { Link } from "react-router-dom";
export default function ShopCategory() {
  return (
    <div>
      <h1 className="text-center text-4xl bg-black py-2 mb-8 text-white">
        ShopCategory
      </h1>
      <p className="text-center">
        <Link to="/404badlinkhere">Link do strony 404</Link>
      </p>
    </div>
  );
}

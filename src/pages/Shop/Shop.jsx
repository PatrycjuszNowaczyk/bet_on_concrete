import ShopFilters from "../../components/ShopFilters/ShopFilters";
export default function Shop() {
  return (
    <>
      <div className="text-center text-4xl bg-slate-800 text-white">Shop</div>
      <div className="container mx-auto">
        <div className="w-1/5 pr-4">
          <ShopFilters />
        </div>
      </div>
    </>
  );
}

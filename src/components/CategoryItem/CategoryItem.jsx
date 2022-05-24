import { Link } from "react-router-dom";
export default function CategoryItem(props) {
  const { title, imgUrl } = props;
  return (
    <Link to={`/shop/${title}`}
      className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer group bg-cover aspect-square sm:aspect-video"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="p-2 sm:p-4 border-2 border-black bg-white bg-opacity-80 transition-colors duration-500 group-hover:transition-colors group-hover:duration-200 group-hover:bg-neutral-500 group-hover:text-white flex flex-wrap items-center grow-0">
        <div>
          <h2 className="uppercase text-2xl text-center font-bold">
            {title}
          </h2>
          <p className="uppercase text-center text-sm sm:text-base text-white bg-neutral-500 px-2 py-1 font-thin">
            shop now
          </p>
        </div>
      </div>
    </Link>
  );
}

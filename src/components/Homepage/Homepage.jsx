export default function Homepage() {
  return (
    <div className="container mx-auto flex flex-auto flex-wrap gap-4 p-4">
      <div className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer">
        <div className="p-2 sm:p-4 border-2 border-black">
          <h2 className="uppercase text-xl text-center">footpaths</h2>
          <p className="uppercase text-center text-xs sm:text-base">shop now</p>
        </div>
      </div>
      <div className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer">
        <div className="p-2 sm:p-4 border-2 border-black">
          <h2 className="uppercase text-xl text-center">lamps</h2>
          <p className="uppercase text-center text-xs sm:text-base">shop now</p>
        </div>
      </div>
      <div className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer">
        <div className="p-2 sm:p-4 border-2 border-black">
          <h2 className="uppercase text-xl text-center">furnitures</h2>
          <p className="uppercase text-center text-xs sm:text-base">shop now</p>
        </div>
      </div>
      <div className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer">
        <div className="p-2 sm:p-4 border-2 border-black">
          <h2 className="uppercase text-xl text-center">tiles</h2>
          <p className="uppercase text-center text-xs sm:text-base">shop now</p>
        </div>
      </div>
      <div className="w-[30%] p-4 sm:p-12 grow min-w-[150px] sm:min-w-[245px] border-2 border-black flex justify-center items-center cursor-pointer">
        <div className="p-2 sm:p-4 border-2 border-black">
          <h2 className="uppercase text-xl text-center">others</h2>
          <p className="uppercase text-center text-xs sm:text-base">shop now</p>
        </div>
      </div>
    </div>
  );
}

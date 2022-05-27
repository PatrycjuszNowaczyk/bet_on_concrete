import React, { Component } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
export default class ShopCategory extends Component {
  render() {
    return (
      <>
        {this.props.items.map((item) => {
          return (
            <div key={item.id} className="relative group z-0 hover:z-10">
              <div className="relative flex items-end p-2 group-hover:bg-black border-2 border-neutral-200 group-hover:border-black transition-colors duration-300 hover:duration-1000 basis-1/4 aspect-square">
                <div
                  className="absolute flex inset-2 group-hover:inset-1 group-hover:bottom-0 transition-all duration-300 group-hover:duration-400 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.mainImg})`,
                  }}
                ></div>
                <div className="relative flex flex-wrap justify-end grow">
                  <p className="text-sm md:text-base lg:text-xl leading-tight lg:leading-normal text-center bg-white grow">
                    <strong>{item.name}</strong>
                  </p>
                  <p className="px-1 text-lg lg:text-2xl text-right bg-white border-2 border-black">
                    {item.price} zł
                  </p>
                </div>
              </div>
              <div className="absolute px-1 pb-1 w-full top-full left-0 flex scale-y-0 group-hover:scale-y-100 transition-transform transform-gpu duration-300 group-hover:delay-300 origin-top bg-black border-2 border-t-0 border-black">
                <div className="bg-white w-full">
                  <div className="flex p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-75 group-hover:duration-300 group-hover:delay-500">
                    <div className="flex justify-center items-center basis-1/2">
                      <button className="p-1 px-2 border-2 border-black hover:bg-neutral-500 hover:text-white font-bold uppercase">
                        dodaj
                      </button>
                    </div>
                    <div className="flex justify-center items-center basis-1/2">
                      <button className="p-2">
                        <AiOutlinePlus />
                      </button>
                      <input
                        className="px-1 text-center border-2 border-black w-12"
                        type="text"
                        name=""
                        id=""
                        defaultValue={1}
                      />
                      <button className="px-1">
                        <IconContext.Provider
                          value={{
                            color: "black",
                          }}
                        >
                          <AiOutlineMinus />
                        </IconContext.Provider>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

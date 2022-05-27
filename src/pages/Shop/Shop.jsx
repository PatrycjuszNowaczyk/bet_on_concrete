import React, { Component } from "react";
import ShopData from "./shopData";
import ShopFilters from "../../components/ShopFilters/ShopFilters";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = ShopData;
  }
  render() {
    const { categories } = this.state;
    return (
      <>
        <div className="text-center text-4xl bg-black py-2 mb-8 text-white">
          Shop
        </div>
        <div className="container px-2 mx-auto flex items-start">
          <div className="w-1/3 lg:w-1/4 xl:w-1/5 inline-block">
            <ShopFilters />
          </div>
          <div className="w-2/3 lg:w-3/4 xl:w-4/5">
            <div className="p-2 border-2 ml-8 border-black">
              {categories.map((category) => {
                if (category.items.length > 0) {
                  return (
                    <div key={category.id}>
                      <h2
                        className={`text-2xl md:text-3xl xl:text-4xl font-bold uppercase ${
                          category.id > 1 ? "pt-8" : "pt-4"
                        } pb-4`}
                      >
                        {category.name}
                      </h2>
                      <div className="grid gap-4 grid-cols-3 xl:grid-cols-4">
                        {category.items.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="relative group z-0 hover:z-10"
                            >
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
                                  <div className="p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-100 delay-300">
                                    <button>dodaj</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              ;
            </div>
          </div>
        </div>
      </>
    );
  }
}

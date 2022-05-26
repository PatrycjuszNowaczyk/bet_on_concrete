import React, { Component } from "react";
import ShopData from "./shopData";
import ShopFilters from "../../components/ShopFilters/ShopFilters";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = ShopData;
  }
  render() {
    console.log(this.state);
    const { items } = this.state;
    return (
      <>
        <div className="text-center text-4xl bg-black py-2 mb-8 text-white">
          Shop
        </div>
        <div className="container mx-auto flex items-start">
          <div className="w-1/3 lg:w-1/4 xl:w-1/5 inline-block">
            <ShopFilters />
          </div>
          <div className="inline-block w-4/5">
            <div className="p-2 border-2 ml-8 border-black grid gap-4 grid-cols-3 xl:grid-cols-4">
              {items.map((item) => {
                return (
                  <div
                    className="flex items-end relative p-2 bg-neutral-200 hover:bg-black transition-colors duration-300 hover:duration-1000 basis-1/4 aspect-square group"
                    key={item.id}
                  >
                    <div
                      className="absolute flex inset-2 group-hover:inset-1 transition-all duration-300 group-hover:duration-400 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.mainImg})` }}
                    ></div>
                    <div className="relative flex flex-wrap justify-end bg-opacity-75 grow">
                      <p className="text-sm md:text-base lg:text-xl leading-tight lg:leading-normal text-center bg-white grow">
                        <strong>{item.name}</strong>
                      </p>
                      <p className="px-1 text-lg lg:text-2xl text-right bg-white border-2 border-black">
                        {item.price} zł
                      </p>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </>
    );
  }
}

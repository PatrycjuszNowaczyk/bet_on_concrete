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
                    className="p-2 border-2 border-black rounded-lg basis-1/4 aspect-square"
                    key={item.id}
                  >
                    <div className="flex flex-row">
                      <div className="w-1/3">
                        <img
                          src={item.mainImg}
                          alt="mainImg"
                          className="w-full"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="text-xl">{item.name}</div>
                        <div className="text-lg">{item.producer}</div>
                        <div className="text-base">{item.description}</div>
                      </div>
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

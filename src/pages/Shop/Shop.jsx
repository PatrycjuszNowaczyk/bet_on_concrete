import React, { Component } from "react";
import ShopData from "./shopData";
import ShopFilters from "../../components/ShopFilters/ShopFilters";
import ShopCategoriesWrapper from "../../components/ShopCategoriesWrapper/ShopCategoriesWrapper";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = ShopData;
  }
  render() {
    const { categories } = this.state;
    console.log(categories);
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
              <ShopCategoriesWrapper categories={this.state.categories} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

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
    return (
      <>
        <div className="text-center text-4xl bg-black py-2 mb-8 text-white">Shop</div>
        <div className="container mx-auto">
          <div className="w-1/5 pr-4">
            <ShopFilters />
          </div>
        </div>
      </>
    );
  }
}

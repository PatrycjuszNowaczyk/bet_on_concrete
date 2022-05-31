import React, { Component } from "react";
import ShopData from "./shopData";
import ShopFilters from "../../components/ShopFilters/ShopFilters";
import ShopCategoriesWrapper from "../../components/ShopCategoriesWrapper/ShopCategoriesWrapper";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    const { categories } = ShopData;
    this.state = { categories, filteredCategories: categories };
    // this.setState({ filteredCategories: this.handleFilterData(null, null) });
    // this.state.filtereredCategories = this.handleFilterData();
    // this.state.filteredCategories = this.handleFilterData();
  }

  handleFilterData = (e, filter) => {
    let price = 0;
    if (filter) {
      price = filter.price;
      // console.log(price);
    }
    // e && e.preventDefault();
    let { categories } = this.state;
    let filteredCategories = categories.filter(
      (category) =>
        category.items.filter((item) => item.price > price).length > 0
    );
    // console.log(filteredCategories);
    if (e && e.target.type === "checkbox") {
      let ulParent = e.target.closest("ul");
      let checkboxes = ulParent.querySelectorAll("input[type='checkbox']");
      if (e.target.name === "all") {
        checkboxes.forEach((checkbox) => {
          if (checkbox.name === "all") {
            checkbox.checked = true;
          } else {
            checkbox.checked = false;
          }
        });
      } else {
        checkboxes[0].checked = false;
        if (
          [...checkboxes].filter((checkbox) => checkbox.checked).length ===
          checkboxes.length - 1
        ) {
          checkboxes[0].checked = true;
        }
      }
    }
    this.setState({ filteredCategories: filteredCategories }, () => {
      // console.dir(this.state);
    });
    return null;
  };

  render() {
    // console.log(this.state.filteredCategories);
    // console.log(this.state);
    return (
      <>
        <div className="text-center text-4xl bg-black py-2 mb-8 text-white">
          Shop
        </div>
        <div className="container px-2 mx-auto flex items-start">
          <div className="w-1/3 lg:w-1/4 xl:w-1/5 inline-block">
            <ShopFilters filterData={this.handleFilterData} />
          </div>
          <div className="w-2/3 lg:w-3/4 xl:w-4/5">
            <div className="p-2 border-2 ml-8 border-black">
              <ShopCategoriesWrapper
                categories={this.state.filteredCategories}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

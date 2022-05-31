import React, { Component } from "react";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";
export default class ShopCategoriesWrapper extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    this.state = {
      categories: props.categories,
    };
  }
  render() {
    // console.log(this.props.categories);
    const categories = this.props.categories;
    // console.log(categories);
    return (
      <div>
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
                  <ShopCategoryItem items={category.items} />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
}

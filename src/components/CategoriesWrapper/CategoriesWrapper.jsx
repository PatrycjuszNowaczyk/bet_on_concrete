import React, { Component } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
export default class CategoriesWrapper extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          id: 1,
          title: "footpaths",
          imgUrl:
            "https://images.pexels.com/photos/7222417/pexels-photo-7222417.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
          id: 2,
          title: "lamps",
          imgUrl:
            "https://content.instructables.com/ORIG/F4G/4ZVL/HKPXBB17/F4G4ZVLHKPXBB17.jpg?auto=webp&frame=1&fit=bounds&md=dd7eadfb85b8c6019d0c28d3f3cbb6dc",
        },
        {
          id: 3,
          title: "furnitures",
          imgUrl:
            "https://i.pinimg.com/originals/66/b3/8d/66b38db5314f9fc1d13defe9336f4e56.jpg",
        },
        {
          id: 4,
          title: "tiles",
          imgUrl:
            "https://www.flooringsuperstore.com/media/catalog/product/cache/796b1863573be1bbc48dcf491612ab6d/e/2/e26605u_trade_select_lvt_flooring_concrete_grey_2.jpg",
        },
        {
          id: 5,
          title: "others",
          imgUrl:
            "https://www.notjustahousewife.net/wp-content/uploads/2017/10/concrete9.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container mx-auto flex flex-auto flex-wrap gap-4 p-4 font-AdventPro selection:bg-neutral-700 selection:text-neutral-300">
        {this.state.categories.map(({ id, title, imgUrl }) => {
          return <CategoryItem key={id} title={title} imgUrl={imgUrl} />;
        })}
      </div>
    );
  }
}

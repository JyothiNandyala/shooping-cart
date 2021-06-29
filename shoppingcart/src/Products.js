import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";
export default function Products() {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                item={item}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

import React from "react";
import top from "../assets/fake-nice-top.jpg";
import bag from "../assets/fake-bag.jpg";
import jacket from "../assets/fake-nice-jacket.jpg";

function Products() {
    let products = [
        {proImage: top, title: "Mens Casual", price: "NGN25,000"},
        {proImage: bag, title: "BackPack", price: "NGN5,000"},
        {proImage: jacket, title: "Jacket", price: "NGN62,000"},
    ]
  return (
    <div>
      <div className="flex justify-between">
        <p>Popular Products</p>
        <button className="btn btn-outline">See All</button>
      </div>

      <div>
        { products.map((product)=> (
            <div>
                <img src={product.proImage} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>


        ))

        }
      </div>
    </div>
  );
}

export default Products;

import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="px-10 rounded-lg">
      <div className="flex flex-col border-2 border-[#858585] bg-white"> 
        <Link className="py-2 pl-1 border-b-2 border-[#858585]" to="electronics">Electronics</Link>
        <Link className="py-2 pl-1 border-b-2 border-[#858585]" to="jewery">Jewery</Link>
        <Link className="py-2 pl-1 border-b-2 border-[#858585]" to="mens-clothing">Men's clothing</Link>
        <Link className="py-2 pl-1" to="womens-clothing">Women's clothing</Link>
      </div>
    </div>
  );
}

export default Category;

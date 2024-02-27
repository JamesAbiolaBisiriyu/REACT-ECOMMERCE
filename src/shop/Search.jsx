import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Search = ({ Products, GridList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Check if Products is an array before using filter
  const filteredProducts = Array.isArray(Products)
    ? Products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="widget widget-search">
      Search
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
      {/* Render filteredProducts or GridList here */}
      {/* Showing search Result */}
      <div>
        {searchTerm &&
          filteredProducts.map((Products) => (
            <Link key={Products.id} to={`/shop/${Products.id}`}>
              <div className="d-flex gap-3 p-2">
                <div>
                  <div className="pro-thumb h-25 ">
                    <img
                      src={Products.img}
                      alt=""
                      width={70}
                      className="flex-{grow|shrink}-0"
                    />
                  </div>
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${Products.id}`}>{Products.name}</Link>
                  </p>
                  <h6>${Products.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;

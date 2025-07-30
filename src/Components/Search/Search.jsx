import React, { useEffect, useState } from "react";
import productsData from "../ProductsData";

const Search = ({searchTerm, setSearchTerm}) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);


  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="px-4 py-1 rounded-xl w-[400px] bg-white transition duration-300 ease-linear outline-none border-gray-400 shadow-lg border-b-4"
      />

      <div>
        {/* Render the filtered products */}
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;

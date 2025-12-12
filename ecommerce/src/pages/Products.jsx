import React, { useEffect, useState } from "react";
import CardDetails from "../components/CardDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  GetProductList,
  GetProductCategoryList,
  GetProductSearchList,
  GetProductCategoryFilter,
  GetProductPaginationList,
} from "../redux/services/productService";
import Header from "../components/Header";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);
  const categoryList = useSelector((state) => state.product.category);

  useEffect(() => {
    dispatch(GetProductList());
    dispatch(GetProductCategoryList());
  }, [dispatch]);

  const [searchText, setSearchText] = useState("");

  // console.log("search: pagina", searchText);
  const [selectedCategory, setSelectedCategory] = useState("");

  // const handleSearch = () => {
  //   if (search.trim()) {
  //     dispatch(GetProductSearchList(search));
  //   }
  // };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category !== "") {
      dispatch(GetProductCategoryFilter(category));
    }
  };
  const [page, setPage] = useState(1);
  const limit = 10; // products per page
  const skip = (page - 1) * limit;
  // useEffect(() => {
  //   dispatch(GetProductPaginationList({ limit, skip }));
  // }, [dispatch, page]);
  useEffect(() => {
    dispatch(GetProductSearchList({ searchText, limit, skip }));
  }, [page]);

  return (
    <>
      <Header
        onSearch={(searchText) => {
          setSearchText(searchText);
          setPage(1); // RESET PAGE FOR SEARCH
          dispatch(GetProductSearchList({ searchText, limit, skip: 0 }));
        }}
      />

      {/* Search + Category Section */}
      <div className="flex gap-4 mb-6 p-4">
        {/* Search */}
        {/* <input
          className="border p-2 rounded w-64"
          type="text"
          value={search}
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button> */}

        {/* Category Dropdown */}
        <select
          className="border p-2 rounded"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categoryList?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList?.products?.map((item) => (
            <CardDetails key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-3">
        {/* Prev */}
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40 text-white"
          disabled={page === 1}
        >
          Prev
        </button>

        {/* Page Number */}
        <span className="px-4 py-2 bg-blue-500 text-white rounded">{page}</span>

        {/* Next */}
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded text-white"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;

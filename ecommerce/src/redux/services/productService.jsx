import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCategory, getProducts } from "../slices/productSlice";

export const GetProductList = createAsyncThunk(
  "product/getProduct",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      // console.log("response: ", response);
      dispatch(getProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);
export const GetProductPaginationList = createAsyncThunk(
  "product/getProductPagination",
  async ({ limit, skip }, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      dispatch(getProducts(response.data)); // update product list
    } catch (error) {
      console.log(error);
    }
  }
);

export const GetProductSearchList = createAsyncThunk(
  "product/search",
  async ({ searchText, limit, skip }, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${limit}&skip=${skip}`
      );
      dispatch(getProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const GetProductCategoryList = createAsyncThunk(
  "product/getProduct",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/categories`
      );
      dispatch(getCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);
export const GetProductCategoryFilter = createAsyncThunk(
  "product/getProduct",
  async (data, { dispatch }) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${data}`
      );
      dispatch(getProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductGrid.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filterSlice";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductGrid = () => {
  const dispatch = useDispatch();
  let { filtered_products, filters, grid_view, sort } = useSelector(
    (state) => state.filter
  );
  const [currentPage, setCurrentPage] = useState(1);
  const resultCounts = filtered_products.length;
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let filteredProducts = filtered_products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  let productList = filteredProducts.map((product) => {
    return (
      <ProductCard product={product} key={product.id} display={grid_view} />
    );
  });

  useEffect(() => {
    dispatch(filterActions.filterProducts());
    dispatch(filterActions.sortProducts());
  }, [filters, sort]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(resultCounts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function onePageBackHandler() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function onePageForwardHandler() {
    if (currentPage !== Math.ceil(resultCounts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <section className={`${classes["products__grid"]}`}>
      {productList}
      {pageNumbers.length > 1 && (
        <div className={`${classes["pagination"]}`}>
          <li
            onClick={onePageBackHandler}
            className={currentPage === pageNumbers[0] ? "disabled" : ""}
          >
            <ArrowBackIosNewIcon />
          </li>
          <ul className={classes["page__numbers"]}>
            {pageNumbers.map((pageNumber) => {
              return (
                <li
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={
                    currentPage === pageNumber ? classes["active"] : ""
                  }
                >
                  {pageNumber}
                </li>
              );
            })}
          </ul>
          <li
            onClick={onePageForwardHandler}
            className={
              currentPage === pageNumbers.length ? classes["disabled"] : ""
            }
          >
            <ArrowForwardIosIcon />
          </li>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;

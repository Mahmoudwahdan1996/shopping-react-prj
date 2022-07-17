import React, { useState } from "react";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./ProductSearchBar.module.css";

import { filterActions } from "../../store/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductSearchBar = ({ windowWidth }) => {
  const dispatch = useDispatch();
  const {
    grid_view,
    filters: { text },
    sort,
    filtered_products,
  } = useSelector((state) => state.filter);
  const { theme } = useSelector((state) => state.theme);

  const [showSort, setShowSort] = useState(false);

  const toggleSortHandler = () => {
    setShowSort((prevState) => !prevState);
  };

  const updateSort = (e) => {
    dispatch(filterActions.updateSort(e.target.value));
  };
  return (
    <section
      className={`${classes["products__wrapper"]} ${
        grid_view === "grid" ? classes["grid__active"] : classes["list__active"]
      }`}
    >
      <section
        className={`${classes["products__control__bar"]} ${
          theme ? classes["dark"] : ""
        }`}
      >
        {windowWidth <= 992 ? (
          <MenuIcon
            style={{
              color: theme && "rgb(208, 210, 214)",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            onClick={() => dispatch(filterActions.showFilter())}
          />
        ) : (
          <span>{filtered_products.length} results found</span>
        )}
        <div>
          <div className={`${classes["products__control__sort"]}`}>
            <button
              className={classes["products__control__sort__btn"]}
              onClick={toggleSortHandler}
            >
              {sort}
              <KeyboardArrowDownOutlinedIcon />
            </button>
            <ul
              className={`${classes["products__control__sort__wrapper"]} ${
                showSort && classes["show"]
              }`}
            >
              <li>
                <label htmlFor="feature" onClick={toggleSortHandler}>
                  feature
                </label>
                <input
                  type="radio"
                  id="feature"
                  name="sort"
                  value="feature"
                  checked={sort === "feature"}
                  onChange={updateSort}
                />
              </li>
              <li>
                <label htmlFor="lowest" onClick={toggleSortHandler}>
                  lowest
                </label>
                <input
                  type="radio"
                  id="lowest"
                  name="sort"
                  value="lowest"
                  checked={sort === "lowest"}
                  onChange={updateSort}
                />
              </li>
              <li>
                <label htmlFor="highest" onClick={toggleSortHandler}>
                  highest
                </label>
                <input
                  type="radio"
                  id="highest"
                  name="sort"
                  value="highest"
                  checked={sort === "highest"}
                  onChange={updateSort}
                />
              </li>
            </ul>
          </div>
          <div className={`${classes["products__control__view"]}`}>
            <label
              htmlFor="grid"
              className={`${classes["view__btn"]} ${classes["grid__btn"]}`}
            >
              <input
                type="radio"
                id="grid"
                value="grid"
                name="productsDisplay"
                checked={grid_view === "grid"}
                onChange={() => dispatch(filterActions.gridView())}
              />
              <GridViewOutlinedIcon
                style={{ color: "#7367f0", fontSize: "2rem" }}
              />
            </label>
            <label
              htmlFor="list"
              className={`${classes["view__btn"]} ${classes["list__btn"]}`}
            >
              <input
                type="radio"
                id="list"
                value="list"
                name="productsDisplay"
                checked={grid_view === "list"}
                onChange={() => dispatch(filterActions.listView())}
              />
              <ListOutlinedIcon
                style={{ color: "#7367f0", fontSize: "2rem" }}
              />
            </label>
          </div>
        </div>
      </section>
      <section
        className={`${classes["products__search__bar"]} ${
          theme ? classes["dark"] : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search Product"
          name="text"
          value={text}
          onChange={(e) =>
            dispatch(
              filterActions.updateFilter({
                name: e.target.name,
                value: e.target.value,
              })
            )
          }
        />
        <div>
          <SearchOutlinedIcon
            style={{ fontSize: "2.2rem", color: "#676d7d" }}
          />
        </div>
      </section>
    </section>
  );
};

export default ProductSearchBar;

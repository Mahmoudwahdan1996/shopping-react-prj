import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    showFilter: false,
    all_products: [],
    filtered_products: [],
    grid_view: "grid",
    sort: "feature",
    filters: {
      text: "",
      price: "allPrices",
      category: "allCategories",
      brand: "allBrands",
      minInputRange: 0,
      maxInputRange: 0,
    },
  },
  reducers: {
    hideFilter: (state) => {
      state.showFilter = false;
    },
    showFilter: (state) => {
      state.showFilter = true;
    },
    updateFilter: (state, action) => {
      const { name, value } = action.payload;
      if (name === "minInputRange" || name === "maxInputRange") {
        const { minInputRange, maxInputRange } = state.filters;
        let priceGap = 10;
        if (minInputRange - maxInputRange >= priceGap) {
          if (name === "minInputRange") {
            state.filters[name] = maxInputRange - priceGap;
          } else {
            state.filters[name] = minInputRange + priceGap;
          }
        } else {
        }
        state.filters = { ...state.filters, [name]: parseInt(value) };
      } else {
        state.filters = { ...state.filters, [name]: value };
      }
    },

    loadProducts: (state, action) => {
      const { allProducts, minInputRange, maxInputRange } = action.payload;
      state.all_products = allProducts;
      state.filtered_products = allProducts;
      state.filters.maxInputRange = maxInputRange;
      state.filters.minInputRange = minInputRange;
    },

    filterProducts: (state, action) => {
      const { text, price, category, brand, minInputRange, maxInputRange } =
        state.filters;
      state.filtered_products = [...state.all_products];
      if (text) {
        state.filtered_products = state.filtered_products.filter((product) => {
          return product.name.toLowerCase().includes(text.toLowerCase().trim());
        });
      }
      if (price !== "allPrices") {
        state.filtered_products = state.filtered_products.filter((product) => {
          if (price === "less than 10") {
            return product.price <= 10;
          } else if (price === "between 10 and 100") {
            return product.price > 10 && product.price <= 100;
          } else if (price === "between 100 and 500") {
            return product.price > 100 && product.price <= 500;
          } else {
            return product.price > 500;
          }
        });
      }

      if (category !== "allCategories") {
        state.filtered_products = state.filtered_products.filter(
          (product) => product.category === category
        );
      }

      state.filtered_products = state.filtered_products.filter((product) => {
        return product.price >= minInputRange && product.price <= maxInputRange;
      });

      if (brand !== "allBrands") {
        state.filtered_products = state.filtered_products.filter(
          (product) => product.brand === brand
        );
      }
    },
    gridView: (state, action) => {
      state.grid_view = "grid";
    },
    listView: (state) => {
      state.grid_view = "list";
    },

    updateSort: (state, action) => {
      state.sort = action.payload;
    },

    sortProducts: (state) => {
      const { sort } = state;
      if (sort !== "feature") {
        if (sort === "lowest") {
          state.filtered_products = state.filtered_products.sort(
            (product1, product2) => product1.price - product2.price
          );
        } else {
          state.filtered_products = state.filtered_products.sort(
            (product1, product2) => product2.price - product1.price
          );
        }
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;

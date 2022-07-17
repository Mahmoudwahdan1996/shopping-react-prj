import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import classes from "./App.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import products from "./data";
import ProductSearchBar from "./components/ProductSearchBar/ProductSearchBar";
import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { useSelector } from "react-redux";

function App() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, [windowWidth]);
  return (
    <div
      className={`${classes["body__wrapper"]} ${theme ? classes["dark"] : ""}`}
    >
      <Sidebar />
      <Navbar windowWidth={windowWidth} />
      <main className={classes["container"]}>
        <header className={classes["main__header"]}>
          <div
            className={`${classes["header__path"]} ${
              theme ? classes["dark"] : ""
            }`}
          >
            <h2>Shop</h2>
            <ul>
              <li>
                <a href="#">
                  <HomeOutlinedIcon
                    style={{ color: "#5e50ee", fontSize: "2rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRightOutlinedIcon
                    style={{
                      fontSize: "2rem",
                      color: theme ? "#b4b7bd" : "#6e6b7b",
                    }}
                  />
                </a>
              </li>
              <li>
                <a className={classes["active"]} href="#">
                  ecommerce
                </a>
              </li>
              <li>
                <a href="#">
                  <ChevronRightOutlinedIcon
                    style={{
                      fontSize: "2rem",
                      color: theme ? "#b4b7bd" : "#6e6b7b",
                    }}
                  />
                </a>
              </li>
              <li>shop</li>
            </ul>
          </div>
          <button className={classes["header__settings"]}>
            <SettingsOutlinedIcon />
          </button>
        </header>
        <section className={`${classes["products__section"]}`}>
          <ProductFilter products={products} />
          <section className={classes["products__sections__wrapper"]}>
            <ProductSearchBar windowWidth={windowWidth} />
            <ProductGrid products={products} />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

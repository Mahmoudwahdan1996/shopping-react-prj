import React, { useEffect, useState } from 'react'
import FilterTitle from '../FilterTitle/FilterTitle'
import classes from "./ProductFilter.module.css"
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterActions } from '../../store/filterSlice';

const ProductFilter = ({products}) => {
    const dispatch= useDispatch();
    const {showFilter , filters }=useSelector(state=>state.filter);
    const {theme }=useSelector(state=>state.theme);
    const {price , category , brand , minInputRange ,maxInputRange }=filters;
    useEffect(()=>{
        dispatch(filterActions.loadProducts({allProducts:[...products] , minInputRange:getMinPrice() , maxInputRange:getMaxPrice()}));
    },[])
    const getPrices = ()=>{
        return products.map(product=>product.price)
    }

    const getMinPrice = ()=>{
        return Math.floor(Math.min(...getPrices()))
    }

    const getMaxPrice = ()=>{
        return Math.ceil(Math.max(...getPrices()))
    }

    function updateFilter(e){
        let name = e.target.name;
        let value = e.target.value;
        dispatch(filterActions.updateFilter({name , value}));
    }

    const maxPercentage=100 - (maxInputRange/getMaxPrice())*100 ;
    const minPercentage=(minInputRange/getMaxPrice())*100 ;

    const getUniqueCategories = ()=>{
        const allCategories = products.map(product=>product.category);
        const categories = [...(new Set(allCategories))] ;
        categories.unshift("allCategories");
        return categories.map((categ , index)=>{
            return (
                <li key={categ}>
                    <label>
                        <input 
                            type='radio' 
                            name='category' 
                            value={categ}
                            checked={categ === category}
                            onChange={updateFilter}
                            />
                        <span className={classes["custom__radio"]} />
                        <span className={classes["label__text"]}>{index === 0 ? "All" : categ}</span>
                    </label>
                </li>
            )
        })

    }

    const getUniqueBrands =()=>{
        const allBrands = products.map(product => product.brand);
        const brands = [...(new Set(allBrands))] ;
        brands.unshift("allBrands");
       return brands.map((brandItem , index)=>{
            return(
                <li key={brandItem} >
                    <label>
                        <input 
                            type='radio'
                            name='brand'
                            value={brandItem}
                            checked={brandItem === brand}
                            onChange={updateFilter}
                        />
                        <span className={classes["custom__radio"]} />
                        <span className={classes["label__text"]}>{index === 0 ? "All" : brandItem}</span>
                    </label> 
                </li>
            )
        })
        
    }


  return (
    <>
    <aside  className={`${classes["aside__products__filter"]} ${showFilter && classes["show"]}`}>
        <h6 className={classes['product__filters__title']}  style={{color: theme && "#d0d2d6"}}>filters</h6>
        <div className={`${classes["product__filters__wrapper"]} ${theme ? classes['dark']:'' }`}>
            <FilterTitle first >multi range</FilterTitle>
            <ul className={classes['filter__section']}>
                <li >
                    <label>
                        <input 
                            type='radio' 
                            value='allPrices' 
                            name='price' 
                            checked={price === "allPrices"} 
                            onChange={updateFilter}
                            />
                        <span className={classes['custom__radio']} />
                        <span className={classes['label__text']}>All</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type='radio' 
                            value='less than 10' 
                            name='price' 
                            checked={price === "less than 10"}
                            onChange={updateFilter}
                        />
                        <span className={classes['custom__radio']} />
                        <span className={classes['label__text']}>&lt;10</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type='radio' 
                            value='between 10 and 100' 
                            name='price'
                            checked={price === "between 10 and 100"}
                            onChange={updateFilter}
                        />
                        <span className={classes['custom__radio']} />
                        <span className={classes['label__text']}>$10 - $100</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type='radio' 
                            value='between 100 and 500' 
                            name='price' 
                            checked={price === "between 100 and 500"}
                            onChange={updateFilter}
                            />
                        <span className={classes['custom__radio']} />
                        <span className={classes['label__text']}>$100 - $500</span>
                    </label>
                </li>
                
                <li>
                    <label>
                        <input 
                            type='radio' 
                            value='greater than 500' 
                            name='price' 
                            checked={price === "greater than 500"}
                            onChange={updateFilter}
                            />
                        <span className={classes['custom__radio']} />
                        <span className={classes['label__text']}>&gt;= $500</span>
                    </label>
                </li>
            </ul>
            <FilterTitle > price range </FilterTitle>
            <div className={classes['slider']}>
                <div className={classes['min__value']}  style={{left: `${minPercentage}%`}}>{minInputRange}</div>
                <div className={classes['progress']}style={{left: `${minPercentage}%`,right: `${maxPercentage}%`}}/>
                <div className={classes['max__value']} style={{right: `${maxPercentage}%`}}>{maxInputRange}</div>
            </div>
            <div className={classes['range__inputs']}>
                <input 
                    type='range' 
                    className={classes['min__range__input']} 
                    min={getMinPrice()}
                    value={minInputRange} 
                    max={getMaxPrice()} 
                    name="minInputRange"
                    onChange={updateFilter}
                    />
                <input 
                    type='range' 
                    className={classes['max__range__input']} 
                    min={getMinPrice()}
                    value={maxInputRange} 
                    max={getMaxPrice()}
                    name="maxInputRange" 
                    onChange={updateFilter}
                    />
            </div>
            <FilterTitle>Categories</FilterTitle>
            <ul className={classes['filter__section']}>
                {getUniqueCategories()}
            </ul>
            <FilterTitle>Brands</FilterTitle>
            <ul className={classes['filter__section']}>
                {getUniqueBrands()}
            </ul>
            <FilterTitle>Rating</FilterTitle>
            <ul className={classes['filter__section']}>
                <li className={classes["rating__row"]}>
                    <a>
                        <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                    </a>
                    <span>160</span>
                </li>
                <li className={classes["rating__row"]}>
                    <a>
                        <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                    </a>
                    <span>176</span>
                </li>
                <li className={classes["rating__row"]}>
                    <a>
                        <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                    </a>
                    <span>291</span>
                </li>
                <li className={classes["rating__row"]}>
                    <a>
                        <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                    </a>
                    <span>190</span>
                </li>
            </ul>
        </div>
    </aside>
    <div 
        className={`${classes["overlay"]} ${showFilter && classes["show"]}`} 
        onClick={()=>dispatch(filterActions.hideFilter())}
    />

    </>
  )
}

export default ProductFilter
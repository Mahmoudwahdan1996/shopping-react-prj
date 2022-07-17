import React from 'react'
import classes from './FilterTitle.module.css'
import { useSelector } from 'react-redux'

const FilterTitle = (props) => {
  const {theme}=useSelector(state=>state.theme)

  return (
    <h6 className={`${classes["filter__title"]} ${props.first && classes["first"]} ${theme && classes["dark"]}`}>
      {props.children}
    </h6>
  )
}

export default FilterTitle

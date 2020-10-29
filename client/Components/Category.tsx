import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';

const Category = (props: any) => {

  return (
    <div id={props.id} className="catContainer">{props.catName}
    <MdRemoveCircle className="containericon" onClick={props.deleteCat}/></div>
  )
}

export default Category;
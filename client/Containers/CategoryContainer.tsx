import React, { useState, useEffect } from 'react';
import Category from '../Components/Category';
import { MdAddCircle, MdCheckCircle, MdRemoveCircle } from 'react-icons/md';

const CategoryContainer = () => {

  const [categories, setCategories] = useState(['GraphQL', 'Typescript', 'React Native']);
  const [newCat, setNewCat] = useState('');
  const [isAddCatActive, setIsAddCatActive] = useState(false);

  const handleAddCat = (event: any) => {
    if(newCat) {
      event.preventDefault();
      setIsAddCatActive(false);
      setCategories(categories.concat(newCat));
      setNewCat('');
    }
  }

  const handleDeleteCat = (e: any) => {
    const newList = categories.filter((item) => item !== e.target.parentElement.parentElement.innerText);
    setCategories(newList);
  }
  const catList: any = [];
  for(let i=0; i < categories.length; i++) {
    catList.push(<Category key={`categ${i}`} id={`categ${i}`} catName={categories[i]} deleteCat={handleDeleteCat}/>);
  }

  return (
    <div id="categorycont">
      <h3>Categories 
        <MdAddCircle className={`containericon ${isAddCatActive? 'inactive' : 'active'}`} onClick={() => setIsAddCatActive(!isAddCatActive)}/>
        <MdRemoveCircle className={`containericon ${isAddCatActive? 'active' : 'inactive'}`} onClick={() => setIsAddCatActive(!isAddCatActive)}/>
      </h3>
      <form onSubmit={handleAddCat} className={`addCatForm ${isAddCatActive? 'active' : 'inactive'}`}>
        <input type="text" onChange={e => setNewCat(e.target.value)} value={newCat} placeholder='Add Category' />
        <button type="submit"><MdCheckCircle className="containericon check" onClick={handleAddCat} /></button>
      </form>

      {catList}
    </div>
  )
}

export default CategoryContainer;
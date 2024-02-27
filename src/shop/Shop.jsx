import React from 'react'
import PageHeader from '../components/PageHeader'
import { useState } from 'react'
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'


const showResults = "Showing 01 - 12 0f 139 Results"

const Shop = () => {
const [GridList, setGridList] = useState(true);
const [Products, setProducts] = useState(Data);
console.log(Products);
// pagination logic
const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 12;

const indexOfLastProduct = currentPage *  productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct)

// function to change current page
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
};
// filter product based on category
const [selectedCategory, setSelectedCategory] = useState("All");
const menuItems = [...new Set(Data.map((Val) => Val.category))];




const filterItem = (currcat) => {
  const newItem = Data.filter((newVal)=> {
    return newVal.category === currcat;
  })
  setSelectedCategory(currcat);
  setProducts(newItem);
}
  return (
    <div>
      
      <PageHeader title="Our Shop Page" curPage="Shop"/>
      {/* shop page */}
      <div className='shop-page padding-tb'>
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
              <article>
                {/* layout and title here */}
                <div className='shop-title d-flex flex-wrap justify-content-between '>
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive": "listActive"}`}>
                      <a className='grid' onClick={()=> setGridList(!GridList)}>
                        <i className='icofont-ghost'></i>
                      </a>
                      <a className='list' onClick={()=> setGridList(!GridList)}>
                        <i className='icofont-listine-dots'></i>
                      </a>
                  </div>
                </div>
              {/* product Cards */}
                <div>
                  <ProductCards GridList = {GridList} Products={currentProducts}/>
                </div>
                <Pagination 
                productsPerPage={productsPerPage}
                totalProducts = {Products.length}
                paginate = {paginate}
                activePage = {currentPage}/>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
                <Search Products = {Products} GridList = {GridList}/>
                <ShopCategory
                filterItem = {filterItem}
                setItem = {setProducts}
                menuItems = {menuItems}
                setProducts = {setProducts}
                selectedCategory = {selectedCategory}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
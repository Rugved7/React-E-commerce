import React from 'react'
import {PRODUCTS} from '../../products'
import Product from './Product'
import '../Shop/Shop.css'
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>E-kart</h1>
      </div>
      <div className='products'>
{PRODUCTS.map((products)=>(
  <Product data={products}/>  // props were passed in order to get data 
))}
      </div>
    </div>
  )
}

export default Shop
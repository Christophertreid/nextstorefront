import React from 'react';
import Image from 'next/image';
import Styles from './styles.module.css'

function ProductCard ({children, product, ...props})  {
  const{productName, productPrice, productManufacturer, productDescription, imgURL, uid} = {...product}
  return (
        <div className={Styles.productcard}>
           <header>
           <Image
              src={imgURL}
              alt={productName}
              width={205}
              height={205}
              />
              <h2>{productName}</h2>
           </header>
           <div className={Styles.details}>
             <span>${productPrice/100}</span>
             <span>{productManufacturer}</span>
           </div>
           <p>{productDescription}</p>
           <footer>
             <form action="/api/checkout" method="POST">
               <input type="hidden" name="uid" value={uid} />
               <button type='submit'>Purchase</button>
             </form>
           </footer>
        </div>
  )
}

export default ProductCard
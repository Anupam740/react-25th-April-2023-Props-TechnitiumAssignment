import React from 'react';
import ProductDetails from "../src/components/ProductDetails"
import './App.css'

const products = [
  {
    
        productId :"1",
        productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Shoe-PlainDerby-Black.jpg/220px-Shoe-PlainDerby-Black.jpg" ,
        productName : "Derby shoe" ,
        Brand :"Sketchers" ,
        productDescription :"A derby is a style of boot or shoe characterized by quarters, with shoelace eyelets that are sewn on top of the vamp." ,
        Price : "15$",
        Rating :"4.2" 
  },
       {
        productId :"2",
        productPic :"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/VenetianShoe.jpg/350px-VenetianShoe.jpg",
        productName : "Venetian loafers",
        Brand :"Woodland",
        productDescription: "Venetian-style shoes or Venetian-style loafers are mid-heel slippers with an upper or top part that is slightly open to the kick of the foot and the ankle bone.",
        Price : "12$",
        Rating : "4.8", 
       },
       {
        productId :"3",
        productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Saucony_Racing_Flat.jpg/220px-Saucony_Racing_Flat.jpg" ,
        productName : "Racing flat",
        Brand :"Liberty",
        productDescription: "Racing flats have only small or no heel lift, and little padding or support. The heel lift of flats ranges from 4mm to 10mm which is closer to the heel lift seen in trainers.",
        Price : "17$",
        Rating :"4.0" ,
       },
       {
        productId :"4",
        productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Paddockboots.jpg/220px-Paddockboots.jpg",
        productName :"Riding boot",
        Brand : "Metro",
        productDescription : "A riding boot is a boot made to be used for horse riding. The classic boot comes high enough up the leg to prevent the leathers of the saddle from pinching the leg of the rider.",
        Price : "22$",
        Rating : "3.6" ,
       },
       {
        productId :"3.8",
        productPic :"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Heelys_wheel_392836616_d0e6649bdf_z.jpg/220px-Heelys_wheel_392836616_d0e6649bdf_z.jpg",
        productName : "Roller shoe",
        Brand : "Fila",
        productDescription :"Roller shoes are shoes that have wheels protruding slightly from the heel, allowing the wearer to alternate between walking and rolling.",
        Price : "27$",
        Rating :"4.4" ,
        
  },
  
]

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductDetails key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

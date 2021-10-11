import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
  constructor()
  {
    super()
    this.state={
      products:[
        {
          price:999,
          title:'Watch',
          qty:1,
          img:'',
          id:1

        },
        {
          price:9999,
          title:'Mobile Phone',
          qty:10,
          img:'',
          id:2

        },
        {
          price:99999,
          title:'Mac Book',
          qty:1,
          img:'',
          id:3

        },
        {
          price:99,
          title:'Cap',
          qty:18,
          img:'',
          id:4

        },
      ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }
  render(){
    const{products}=this.state;

    return(
      <div className="cart">
        {products.map((product)=>
        {
          return<CartItem product={product} key={product.id}/>
        })}
      </div>
    )
  }
}

export default Cart;
import React from "react";


class CartItem extends React.Component{
  
  increaseQuantity =()=>{           //arrow functions are automatically bind the value of this class
    // console.log('this.state',this.state);
    //setState form 1 
    // this.setState({  //set state is function  that is used from react.component
    //   qty:this.state.qty +1
    // }); this is object form
    
    //set state form 2
    this.setState((prevState)=>{
      return{
        qty:prevState.qty+1   //this is function state
      }

    });
    

  }
  decreaseQuantity =()=>{
    const{qty}=this.state; //destructuring

    if(qty === 0){
      return;
    }


    this.setState((prevState)=>{
      return{
        qty:prevState.qty-1
      }
    });
  
  }
  render (){
    console.log('this.props',this.props)
    const{price,title,qty}=this.props.product;//destructring
    const{
      product,
      onDecreaseQuantity,
      onIncreaseQuantity,
      onDeleteProduct
    } =this.props;
    return(
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}></img>


        </div>
        <div className="right-block">
          <div style={{fontSize:25}}>{title}</div>
          <div style={{color:'#777'}}>Rs {price}</div>
          <div style={{color:'#777'}}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img 
            alt ="increase" 
            className="actions-icons" 
            src="https://img-premium.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1633669898~hmac=80dda97f3d21c425722f09f9d5788220" 
            onClick={() =>onIncreaseQuantity(product)}
            />

            <img 
            alt ="decrease" 
            className="actions-icons" 
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
            onClick={()=>onDecreaseQuantity(product)}
            />

            <img 
            alt ="delete" 
            className="actions-icons" 
            src="https://img-premium.flaticon.com/png/512/2874/premium/2874821.png?token=exp=1633669780~hmac=db0593745646fac206b6a4065d3164cf"
            onClick={()=>onDeleteProduct(product.id)}
            />

          </div>

        </div>
      </div>
    )
  }
}

const styles={
  image:{
    height:110,
    width:110,
    boderRadius:4,
    background:'#777'
  }
}

export default CartItem;
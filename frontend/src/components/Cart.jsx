import "../styles/cartStyles.css"


const Cart = (props) => {
  return (
    <div className="cart">
      <div className="contactSection">
        <a className="logo" href="/">Shopping Cart</a>
        <span>Call us: +919845662200 / +919845662211 | </span> 
        <img src="images/facebook.png" alt="" width={"30px"}/>
        <img src="images/instagram.png" alt="" width={"30px"}/>
        {/* <img src="images/facebook.png" alt="" />
        <img src="images/instagram.png" alt="" /> */}
      </div>

      <div className="iconsSection" >
        <img src="images/search.svg" alt=""/>

        <img id="cart-icon" src="images/cart.svg" alt="" onClick={props.setShowCart} />

        <span>  
          <sup className="totalItems">
            {props.products.reduce((total, product) => total + product.quantity, 0)}
          </sup>
        </span>

        <a href="/account">
          <img src="images/login.svg" alt=""/>
        </a>
      </div>

      {props.showCart && 
        <div className="popup">
          <ul>
            {props.products.map(item =>(                            
              <li key={item.pid}>
                {item.quantity ? `${item.name}: ${item.quantity}` : ""}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default Cart

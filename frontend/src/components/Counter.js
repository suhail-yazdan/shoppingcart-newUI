import "../styles/counterStyles.css"

export default function Counter(props) {
    return (
      <div className="counter">
        <div>
        <h4>Add to Cart</h4> 
        </div>
        <div>
        <button className="counterBtn" onClick={props.onIncrement}>
          +
        </button>
        &nbsp;
        <span className={props.product.quantity === 0 ? "counterValue counterValueDefault" : "counterValue counterValueAdded"}>
          {props.product.quantity === 0 ? "0": props.product.quantity}
        </span>
        &nbsp;
        
        <button className="counterBtn" onClick={props.onDecrement}>
          -
        </button>
        </div>
        <div>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>
    );
}

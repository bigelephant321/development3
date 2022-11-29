export default function cart(props) {

    const cart = props.cart;
    const calcFunc = props.calcFunc;

    return ( 
        <div>
            <h2>Cart</h2>
        
            {cart.map((item, index) => (<p>{item.name}</p>))}
            Total: {calcFunc()}    
        </div>
      ); 
}
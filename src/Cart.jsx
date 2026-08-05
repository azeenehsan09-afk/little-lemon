import { useNavigate } from "react-router-dom";
import "./App.css";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <button
            className="order-btn"
            onClick={() => navigate("/order")}
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
  <h2>Total: ${total.toFixed(2)}</h2>

  <div className="cart-buttons">
    <button
      className="order-btn"
      onClick={() => navigate("/order")}
    >
      Continue Shopping
    </button>

    <button className="checkout-btn">
      Checkout
    </button>
  </div>
</div>
        </>
      )}
    </main>
  );
}

export default Cart;
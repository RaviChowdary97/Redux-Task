import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "./CARTSLICE";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const handleRemoveOneItem = () => {
    dispatch(removeItem());
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  const shipping = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    if (totalPrice > 200) {
      return "FREE";
    } else {
      return "$20 Has to pay";
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <div
          style={{
            marginBottom: "20px",
            color: "green",
            marginLeft: "550px",
          }}
        >
          Cart-{cartItems.length}
        </div>
        <button
          style={{
            backgroundColor: "crimson",
            borderRadius: "9px",
            marginLeft: "450px",
          }}
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <button
          style={{
            backgroundColor: "green",
            borderRadius: "9px",
            marginLeft: "50px",
          }}
          onClick={() => handleRemoveOneItem()}
        >
          Remove 1 Item
        </button>
        <div style={{ paddingTop: "30px", marginLeft: "500px", color: "blue" }}>
          Total Price: ${calculateTotalPrice()}
        </div>
        <div
          style={{
            marginLeft: "450px",
            marginTop: "5px",
            color: "brown",
          }}
        >
          SHIPPING : {shipping()}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {cartItems.map((element, index) => (
          <CartCard {...element} />
        ))}
      </div>
    </>
  );
};

export default Cart;

const CartCard = ({
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  rating,
  stock,
}) => {
  return (
    <>
      <div
        className="card d-flex  flex-column  justify-content-center align-items-center"
        style={{
          width: "14rem",
          marginTop: "3%",
          marginLeft: "3.5%",
          height: "330px",
        }}
      >
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="card-title">$ {price}</h6>
            <span>⭐{rating}</span>
          </div>
          <p className="text-center">{description}</p>
          <p className="text-center">Discount-{discountPercentage}%</p>

          <p className="text-center">Available Stock- {stock}</p>
        </div>
      </div>
    </>
  );
};

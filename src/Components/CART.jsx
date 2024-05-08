import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem, removeItem } from "./CARTSLICE";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
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
    } else if (totalPrice == 0) {
      return "$0";
    } else {
      return "$20 Has to pay";
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <div
          style={{
            color: "green",
            marginLeft: "500px",
            marginBottom: "9px",
          }}
        >
          Total Quantity - {cartItems.length}
        </div>

        <div
          style={{ marginLeft: "505px", color: "blue", marginBottom: "9px" }}
        >
          Total Price: ${calculateTotalPrice()}
        </div>
        <div
          style={{
            marginLeft: "510px",
            marginBottom: "9px",
            color: "brown",
          }}
        >
          SHIPPING : {shipping()}
        </div>
        <button
          style={{
            backgroundColor: "red",
            borderRadius: "9px",
            marginLeft: "500px",
            border: "none",
            padding: "7px",
          }}
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <button
          style={{
            backgroundColor: "yellowgreen",
            borderRadius: "9px",
            border: "none",
            marginLeft: "15px",
            padding: "7px",
          }}
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {cartItems.map((element) => (
          <CartCard {...element} />
        ))}
      </div>
    </>
  );
};

export default Cart;

const CartCard = ({
  id,
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  rating,
  stock,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleRemoveOneItem = () => {
    dispatch(removeItem(id));
  };

  const handleAddOneItem = () => {
    dispatch(
      addItem({
        id,
        title,
        description,
        thumbnail,
        price,
        discountPercentage,
        rating,
        stock,
      })
    );
  };

  return (
    <>
      <div
        className="card d-flex flex-column justify-content-center align-items-center gap-20"
        style={{
          width: "14rem",
          marginTop: "3%",
          marginLeft: "3.5%",
          height: "auto",
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
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleAddOneItem}>
              +
            </button>
            <span>{quantity}</span>
            <button className="btn btn-warning" onClick={handleRemoveOneItem}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

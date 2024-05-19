import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem, incrementQuantity } from "./CARTSLICE";
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
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const shipping = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
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
            textAlign: "center",
            marginBottom: "9px",
          }}
        >
          Total Quantity -{" "}
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </div>

        <div
          style={{ textAlign: "center", color: "blue", marginBottom: "9px" }}
        >
          Total Price: ${calculateTotalPrice()}
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "9px",
            color: "brown",
          }}
        >
          SHIPPING : {shipping()}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "9px",
              border: "none",
              padding: "7px",
              marginRight: "10px",
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
              padding: "7px",
            }}
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {cartItems.map((element) => (
          <CartCard key={element.id} {...element} />
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
    dispatch(incrementQuantity(id));
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
        <img src={thumbnail} className="card-img-top" alt={title} />
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

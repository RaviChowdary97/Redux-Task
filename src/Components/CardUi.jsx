export default function CardUi({
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  rating,
  stock,
  addItem,
}) {
  return (
    <>
      <div
        className="card d-flex  flex-column  justify-content-center align-items-center"
        style={{
          width: "14rem",
          marginTop: "3%",
          marginLeft: "3.5%",
          height: "450px",
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
          <div className="d-flex justify-content-center">{addItem}</div>
        </div>
      </div>
    </>
  );
}

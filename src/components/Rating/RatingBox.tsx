const RatingBox = ({ rating }: { rating: any }) => {
  return (
    <div style={{ display: "inline" }}>
      <span
        style={{ color: rating >= 2 ? "orange" : "" }}
        className="fa fa-star "
      ></span>
      <span
        style={{ color: rating >= 4 ? "orange" : "" }}
        className="fa fa-star "
      ></span>
      <span
        style={{ color: rating >= 5.5 ? "orange" : "" }}
        className="fa fa-star "
      ></span>
      <span
        style={{ color: rating >= 7.5 ? "orange" : "" }}
        className="fa fa-star"
      ></span>
      <span
        style={{ color: rating > 8.5 ? "orange" : "" }}
        className="fa fa-star"
      ></span>
    </div>
  );
};

export default RatingBox;

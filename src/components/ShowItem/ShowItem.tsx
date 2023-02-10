import classes from "./showItem.module.css";
import { useHistory } from "react-router-dom";
import RatingBox from "../Rating/RatingBox";

const ShowItem = ({ title, image, rating, id }: any) => {
  const history = useHistory();

  const ratingScore = rating ? `${rating}/10` : "Rating not available";

  return (
    <div
      onClick={() => {
        history.push(`/details${id}`);
      }}
      className={classes.showCard}
    >
      <img src={image} alt="" />
      <div>
        <div className={classes.text}>{ratingScore}</div>
        {rating && <RatingBox rating={rating} />}
        <div className={classes.text}>{title}</div>
      </div>
    </div>
  );
};

export default ShowItem;

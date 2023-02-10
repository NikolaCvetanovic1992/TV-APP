import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./ShowDetails.module.css";
import RatingBox from "../Rating/RatingBox";
import Notification from "../Notification/Notification";
import ShowsContext from "../../context/shows-context";
import { useContext } from "react";

const ShowDetailsView = () => {
  const ctx = useContext(ShowsContext);

  const history = useHistory();

  const id = history.location.pathname.slice(8);

  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        ctx.setMessage(data.name);
        setData(data);
      });
  }, [id]);

  const image = data?.image?.medium || "N/A";
  const rating = data.rating?.average || "N/A";
  const name = data.name;
  const summary = data.summary
    ?.replace(/<p|<b>|>|<|/g, "")
    .replace("/b", "")
    .replaceAll("/p", "");

  return (
    <div>
      {ctx.message && (
        <Notification message={`Succsessfully loaded ${ctx.message}`} />
      )}
      <div className={classes.header}></div>
      <div className={classes.content}>
        <p onClick={() => history.push("/")}>TV BLAND</p>
        <div className={classes.description}>
          <img height="295px" width="210px" src={image} alt="" />
          <div className={classes.textContent}>
            <div>Rating: {rating}/10</div>
            <RatingBox rating={rating} />
            <h2>{name}</h2>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsView;

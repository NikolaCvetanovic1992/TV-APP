import classes from "./showList.module.css";
import ShowItem from "./ShowItem/ShowItem";
import Footer from "./Footer/footer";

const ShowList = ({ data }: any) => {
  return (
    <section className={classes.videoPosition}>
      <div className={classes.videoGrid}>
        {data.map((show: any) => {
          const image =
            show.show.image?.medium ||
            "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1642515924.png?resize=980:*";

          return (
            <ShowItem
              id={show.show.id}
              key={Math.random()}
              image={image}
              title={show.show.name}
              rating={show.show.rating.average}
            />
          );
        })}
      </div>
      <Footer />
    </section>
  );
};

export default ShowList;

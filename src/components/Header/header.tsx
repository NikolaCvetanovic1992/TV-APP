import classes from "./header.module.css";
import Search from "../SearchComponent/SearchComponent";

const Header = ({ onSearch, onReset }: any) => {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.textContainer}>
        <h3>TV BLAND</h3>
        <p>TV show and veb series data base</p>
        <p>
          Create personal scheduleds. Episode guide, cast, crew and charachter
          information.
        </p>
        <p className={classes.shows}>Last Added Shows</p>
        <Search onSearch={onSearch} onReset={onReset} />
      </div>
    </header>
  );
};

export default Header;

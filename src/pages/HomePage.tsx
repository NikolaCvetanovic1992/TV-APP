import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowList from "../components/ShowsList";
import Header from "../components/Header/header";
import useFetch from "../hooks/useAsync";
import SideMenu from "../components/SideMenu/SideMenu";

const HomePageView = () => {
  const role = localStorage.getItem("role");

  const history = useHistory();

  const [data, setData] = useState<any>([]);

  const { runAsync } = useFetch();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.replace("/login");
    }
    runAsync("https://api.tvmaze.com/schedule").then((res) => {
      setData(res);
    });
  }, []);

  const onSearchHandler = (value: string) => {
    runAsync(`https://api.tvmaze.com/singlesearch/shows?q=${value}`).then(
      (data) => {
        if (!data) return;
        setData([{ show: data }]);
      }
    );

    /*fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log([{ show: data }]);
        if (!data) return;
        setData([{ show: data }]);
      });*/
  };

  const resetHandler = () => {
    runAsync("https://api.tvmaze.com/schedule").then((res) => {
      setData(res);
    });
  };

  return (
    <React.Fragment>
      <Header onSearch={onSearchHandler} onReset={resetHandler} />
      <ShowList data={data} />
      <SideMenu />
    </React.Fragment>
  );
};

export default HomePageView;

import React from "react";

const ShowsContext = React.createContext({
  message: "",
  loading: false,
  setMessage: (message: string) => {},
  setLoading: (loading: boolean) => {},
});

export default ShowsContext;

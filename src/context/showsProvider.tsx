import { useReducer } from "react";

import ShowsContext from "./shows-context";

const defaultShowsState = {
  loading: false,
  message: "",
  setMessage: (message: string) => {},
  setLoading: (loading: boolean) => {},
};

const showsReducer = (state: any, action: any) => {
  console.log(action.loading);

  if (action.type === "SET_MESSAGE") {
    return {
      ...state,
      message: action.message,
    };
  }
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.loading,
    };
  }
  return defaultShowsState;
};

const ShowsProvider = (props: any) => {
  const [showsState, dispacthAction] = useReducer(
    showsReducer,
    defaultShowsState
  );
  const messageHandler = (message: string) => {
    dispacthAction({ type: "SET_MESSAGE", message });
  };

  const loadingHandler = (loading: boolean) => {
    dispacthAction({ type: "SET_LOADING", loading });
  };

  const showsContext = {
    loading: showsState.loading,
    message: showsState.message,
    setMessage: messageHandler,
    setLoading: loadingHandler,
  };

  return (
    <ShowsContext.Provider value={showsContext}>
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsProvider;

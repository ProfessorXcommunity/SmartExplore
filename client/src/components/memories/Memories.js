import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import MemoryApp from "./MemoryApp";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const Memories = () => {
  return (
    <Provider store={store}>
      <MemoryApp />
    </Provider>
  );
};

export default Memories;

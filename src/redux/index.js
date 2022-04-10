import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalControl";

const store = configureStore({
  reducer: { modal: modalReducer },
});

export default store;

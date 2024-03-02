import {configureStore} from "@reduxjs/toolkit";
import { myReducer } from "./components/Reducer";

const Store = configureStore({
  reducer: {
    demoReducer: myReducer
  }
});

export default Store;


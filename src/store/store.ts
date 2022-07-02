import { configureStore } from "@reduxjs/toolkit";
import leReducerDeLobjetShape from "./ShapeSlice"; // importe les reducer de ShapeSlice (export default shapeSlice.reducer; )

// configure le store avec l'ensemble des reducers de l'application
export const store = configureStore({
  reducer: {
    shape: leReducerDeLobjetShape,
  },
});

// expose le type RootState, permettant d'acceder aux variables du state
export type RootState = ReturnType<typeof store.getState>;

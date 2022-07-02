import { createSlice } from "@reduxjs/toolkit";
import { ShapeModel } from "../components/model/ShapeModel";
import { RootState } from "./store";

// définit l'état initial de l'objet shape
const initialState = {
  size: 100,
  color: "#888888",
} as ShapeModel;

// le slice contient les reducers (c'est le moteur de Redux)
export const shapeSlice = createSlice({
  name: "shape", // est utilisé pour nommer les actions.type
  initialState, // utilisé l'objet initial définit plus haut

  reducers: {
    // liste des reducers, ceux-ci peuvent être centralisés comme c'est le cas ici, ou être stockés dans des fichiers différents
    grow: (shapeState: ShapeModel, action) => {
      shapeState.size = shapeState.size + action.payload; // on note que l'on modifie directement l'objet Shape du state
    },
    decrease: (state: ShapeModel, action) => {
      state.size = state.size - action.payload;
    },
    changeColor: (state: ShapeModel, action) => {
      state.color = action.payload;
    },
  },
});

export const { grow, decrease, changeColor } = shapeSlice.actions; // après les avoir wrappés, on expose nos reducers à l'extérieurs pour que ceux-ci puissent être appelés

export const selectShape = (state: RootState) => state.shape; // on expose également une fonction select* permettant de récupérer l'objet state stocké dans le state

export default shapeSlice.reducer; // on expose le reducer, ou plutot l'ensemble des reducers de shapeSlice, pour qu'ils puissent être combinés aux autres reducer de l'application. Pour rappel une variable exposée avec l'attribut default peut être importée sous un autre nom (comme c'est le cas ici)

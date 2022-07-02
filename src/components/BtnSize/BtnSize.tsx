import { FC } from "react";
import { useDispatch } from "react-redux";
import { decrease, grow } from "../../store/ShapeSlice";
// decrease et grow sont les deux reducers définits dans ShapeSlice

const BtnSize: FC = () => {
  const dispatch = useDispatch(); // récupère la fonction useDispatch de Redux pour executer les actions
  return (
    <>
      <button
        onClick={() => {
          dispatch(grow(20)); //execute le reducer grow en passant en parametre la taille à agrandir
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrease(20)); //execute le reducer decrease en passant en parametre la taille à rétrecir
        }}
      >
        -
      </button>
    </>
  );
};

export default BtnSize;

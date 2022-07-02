import { FC } from "react";
import { useSelector } from "react-redux";
import { selectShape } from "../../store/ShapeSlice";

const Shape: FC = () => {
  // on récupère ici l'objet shape stocké dans le state partagé, lorsque l'objet shape change, ce component est rafraichit.
  // selectShape (définit dans ShapeSlice) permet d'indiquer l'objet à retourner (ici shapeModel)
  //useSelector() permet d'effectuer cette récupération
  const shape = useSelector(selectShape);

  return (
    // pour faire simple la forme est une simple div dont on modifie la taille après avoir récupéré les attributs du store Redux
    <div
      style={{
        width: shape.size + "px",
        height: shape.size + "px",
        backgroundColor: shape.color,
        border: "1px black",
      }}
    ></div>
  );
};

export default Shape;

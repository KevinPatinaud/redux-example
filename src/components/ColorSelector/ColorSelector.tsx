import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, selectShape } from "../../store/ShapeSlice";

const ColorSelector: FC = () => {
  const dispatch = useDispatch();
  const shape = useSelector(selectShape);
  return (
    <input
      type="text"
      value={shape.color}
      onChange={(col) => {
        dispatch(
          changeColor("#" + col.target.value.replace(/[^0-9a-fA-F]/g, ""))
        );
      }}
      maxLength={7}
    ></input>
  );
};

export default ColorSelector;

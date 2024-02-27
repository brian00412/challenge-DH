import React from "react";

function RowTable(props) {

  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {props.nombre}
    </button>
  );
}






export default RowTable;
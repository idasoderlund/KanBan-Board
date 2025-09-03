import React from "react";
import { useContext } from "react";
import Column from "../Components/Column.tsx"; //Denna går inte att hitta
import { TaskContext } from "../Contexts/Context.tsx"; //Denna går inte att hitta // går fortfarande inte att hitta

const Board = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("TasksContext saknas");

  const { columns } = ctx;

  return (
    <div /*style={{ display: "flex", gap: "10px" }}*/>
      {columns.map((col) => (
        <Column key={col.id} column={col} />
      ))}
    </div>
  );
};
export default Board;

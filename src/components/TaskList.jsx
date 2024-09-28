import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  //Accediedo al valor del prop que llega del componente APP
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }
  //Ver que tira si saco el key del div de abajo
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map(
        (
          task //ver esto mejor, porque no me lo hace con llaves?
        ) => (
          <TaskCard key={task.id} task={task} /> //Cada elemento de la key necesita un id
        )
      )}
    </div>
  );
}

export default TaskList;

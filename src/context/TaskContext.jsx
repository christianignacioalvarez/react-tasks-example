import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //as data para tomar el objeto con este nombre y el compilador no se equivoque con el task del useState()

export const TaskContext = createContext(); //Se deja en una constante el objeto que arroja la funcion createContext//Seria como el "nombre" del contexto

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); //Lo que hace el "...tasks" es que trae todo lo que estaba en ese arreglo y con el ,task le agregamos esta nueva tarea
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //Aca el useEffect() siverve para cargar las tareas cuando se carga el componente
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks, //Aca se manda como un objeto porque se manda verias cosas
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

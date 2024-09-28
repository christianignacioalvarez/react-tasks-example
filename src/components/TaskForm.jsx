import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [tittle, setTittle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault() //Esat funcion cancela el comortamiento por defecto de enviar el formulario
        createTask({
            title: tittle,
            description //No hace falta poner el valor porque es el mismo nombre y se puede dejar solo este
        })
        setTittle("")
        setDescription("")
    }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
      <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}//Esto es para que se vacie el input despues de enviar al formulario dado lo de la linea 14
        autoFocus //Esto es para que el click ya aparezca en el input del titulo a completar
        className='bg-slate-300 p-3 w-full mb-2'
      />
      <textarea placeholder='Escribe la descripcion de esta tarea' 
      onChange={e => setDescription(e.target.value)}
      value={description} //Lo mismo que arriba//Es para que muestre el valor del estado
      className='bg-slate-300 p-3 w-full mb-2'
      ></textarea>
      <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;

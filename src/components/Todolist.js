import React from 'react'
import { useSelector } from 'react-redux'
import Todomodel from './Todomodel'

const Todolist = () => {
    const tasks = useSelector((state)=> state.listTasks)

    
  return (
    <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
        {
            tasks.map((task) =>
            <Todomodel task={task} key={task.id} />
            )
        }
    </div>
  )
}

export default Todolist
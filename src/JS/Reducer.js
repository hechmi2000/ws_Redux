import { ADD_TASK, DELETE_TASK, DONE_TASK } from "./Actiontypes"

// initialState
const initialState = {
    listTasks : [
        {id: Math.random(),title:"Task 1" ,description: "Discription 1", isDone:false},
        {id: Math.random(),title:"Task 2" ,description: "Discription 2", isDone:true},
        {id: Math.random(),title:"Task 3" ,description: "Discription 3", isDone:false},

    ]
}

 const todoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case DONE_TASK:
            return {...state,listTasks: state.listTasks.map
                ((el)=>el.id === payload ? {...el, isDone: !el.isDone  } : el )}

        case DELETE_TASK:
            return {...state,listTasks: state.listTasks.filter
                ((el)=>el.id != payload)}

        case ADD_TASK:
            return {...state,listTasks: [...state.listTasks, payload]};        
        
        default:
            return state
    }
 }

 export default todoReducer
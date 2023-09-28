import React, { useState } from 'react'
import {TodoProvider} from './13_Context/TodoContext'

function App() {
    const [todos,useTodos]=useState([])
    // Here the functions names should be same as the TodoProvider fragment values so the functionality goes in it 
    const addTodo=(todo)=>{
        setTodos((prev)=> [{id:1,...todo},...prev])
    }
    const updateTodo=(id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>{prevTodo.id === id ? todo:prevTodo}))
    }
    const deleteTodo=(id)=>{
        setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
    }
    const toggleComplete=(id)=>{
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo === id ? {...prevTodo,completed: !prevTodo.completed}:prevTodo))
    }

    return(
        <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
        </div>
        </TodoProvider>
    )
}

export default App
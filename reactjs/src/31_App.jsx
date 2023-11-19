import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './31_redux/slice/todo';

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    if (state.todo.isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Loading....</h1>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <button
                onClick={(e) => dispatch(fetchTodos())}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4">
                Fetch Data
            </button>

            {state.todo.data && (
                <ul>
                    {state.todo.data.map((e) => (
                        <li key={e.id} className="mb-2 p-2 bg-gray-100 rounded">
                            {e.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;

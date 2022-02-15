import { useReducer } from 'react';
import { Todo } from '../models/model';

type Actions = 
 | { type: 'add', payload: string }
 | { type: 'remove', payload: number }
 | { type: 'done', payload: number };

export const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                { id: Date.now(), todo: action.payload, isDone: false }
            ];
        case 'remove':
            return state.filter((todo) => todo.id !== action.payload);
        case 'done':
            return state.map((todo) => (
                todo.id !== action.payload 
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            ));
        default:
            return state;
    };
};

// TODO : Implement the project using useReducer
const ReducerExample = () => {
    const [state, setState] = useReducer(TodoReducer, []);
    return (
        <div>
            Reducer Example
        </div>
    );
};

export default ReducerExample;
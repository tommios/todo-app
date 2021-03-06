import {
    TODOS_CREATE,
    TODOS_GET_ALL,
    TODOS_GET_ONE,
    TODOS_DELETE_ONE,
    TODOS_UPDATE,
} from "./types";

import {success, error} from "@redux-requests/core";

const initialState = {
    todos: [],
    todo: {},
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        //////////  TODOS_CREATE  //////////
        case TODOS_CREATE: {
            return {
                ...state,
                isLoading: true,
                errors: undefined,
            };
        }
        case success(TODOS_CREATE): {
            const todos = [...state.todos];
            todos.push(action.response.data);

            return {
                ...state,
                todos,
                isLoading: false,
            };
        }
        case error(TODOS_CREATE): {
            return {
                ...state,
                todos: [],
                isLoading: false,
                errors: action.error,
            };
        }

        //////////  TODOS_GET_ALL  //////////
        case TODOS_GET_ALL: {
            return {
                ...state,
                todos: [],
                isLoading: true,
                errors: undefined,
            };
        }
        case success(TODOS_GET_ALL): {
            return {
                ...state,
                todos: action.response.data,
                isLoading: false,
            };
        }
        case error(TODOS_GET_ALL): {
            return {
                ...state,
                todos: [],
                isLoading: false,
                errors: action.error.response.data,
            };
        }

        //////////  TODOS_GET_ONE  //////////
        case TODOS_GET_ONE: {
            return {
                ...state,
                isLoading: true,
                errors: undefined,
            };
        }
        case success(TODOS_GET_ONE): {
            return {
                ...state,
                todo: action.response.data,
                isLoading: false,
            };
        }
        case error(TODOS_GET_ONE): {
            return {
                ...state,
                todo: {},
                isLoading: false,
                errors: action.error.response.data,
            };
        }

        //////////  TODOS_UPDATE  //////////
        case TODOS_UPDATE: {
            return {
                ...state,
                isLoading: true,
                errors: undefined,
            };
        }
        case success(TODOS_UPDATE): {
            const todo = action.response.data;
            const todos = [...state.todos];
            const index = todos.findIndex((i) => i._id === todo._id);
            if (index !== -1) {
                todos[index] = todo;
            }
            return {
                ...state,
                todo: todo._id ? {...state.todo, ...action.response.data} : {},
                todos,
                isLoading: false,
            };
        }
        case error(TODOS_UPDATE): {
            return {
                ...state,
                isLoading: false,
                errors: action.error.response.data,
            };
        }

        //////////  TODOS_DELETE_ONE  //////////
        case TODOS_DELETE_ONE: {
            return {
                ...state,
                isLoading: true,
                errors: undefined,
            };
        }
        case success(TODOS_DELETE_ONE): {
            let index = state.todos.findIndex((element) => action.meta.requestAction.id === element._id);
            if (index === -1) return state;

            const todos = [...state.todos];
            todos.splice(index, 1);
            return {
                ...state,
                todos,
            };
        }
        case error(TODOS_DELETE_ONE): {
            return {
                ...state,
                todo: {},
                isLoading: false,
                errors: action.error.response.data,
            };
        }

        default: {
            return state;
        }
    }
};

import React, { createContext, useContext, useReducer } from 'react';

const Context = createContext();

const initialState = {
    cart: {},
};

const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart ? { ...state.cart, [action.item.id]: action.item } : { [action.item.id]: action.item },
            };
        case 'REMOVE_FROM_CART':
            delete state.cart[action.id];
            return {
                ...state,
            };
        case 'RESET_CART':
            return {
                ...state,
                cart: initialState.cart,
            };
        default:
            throw new Error(`Unhandled action type ${action.type}`);
    }
};

export const useGlobalContext = () => {
    const [state, dispatch] = useContext(Context);

    if (!state || !dispatch) {
        throw new Error('useGlobalContext must be used within a Provider');
    }

    return { state, dispatch };
};

export const Provider = (props) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return <Context.Provider value={[state, dispatch]} {...props} />;
};

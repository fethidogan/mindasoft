import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    formsent: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'FORM_SENT':
            return { ...state, formsent: true };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
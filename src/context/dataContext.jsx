

import { createContext, useContext, useReducer } from "react";
import { Provider } from "react";
import {initialState, dataReducerFunc} from "../reducer/dataReducer"

const DataContext = createContext()

export const DataProvider = ({children}) =>{

    const [state, dispatch] = useReducer(dataReducerFunc, initialState) 

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () =>  useContext(DataContext)

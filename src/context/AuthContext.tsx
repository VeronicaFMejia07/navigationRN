import { createContext, useReducer } from "react";
import React from "react";
import { AuthReducer } from "./AuthReducer";

// Definir como luce y que información va almacenar el estado del context
export interface AuthState {
    isLogged: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Definir el estado inicial, como será el estado cuando la app se ejecute por 1 vez
//se define teniendo en cuenta el tipado 
export const authInitialState: AuthState = {
    isLogged: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Definir como luce y que tendrá el value del context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    favoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (userName: string) => void;
}

//Crear el contexto, este ofrece metodos para poder cambiar la informacion del state
//La información que va a lucir y tener el context será de tipo la interfaz AuthContextProps
export const AuthContext = createContext({} as AuthContextProps);

//Componente que será el proveedor del estado, recibe los hijos
export const AuthProvider = ({children} : any) => {
    
    //Un reducer es una función que recibe un argumento y genera un nuevo estado (copia del estado inicial)
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState)

    const signIn = () => {
        //Se llama la acción con el dispatch y se asigna que acción se va a ejecutar
        dispatch({type: 'signIn'})
    }
    
    const favoriteIcon = (iconName:string) => {
        dispatch({type: 'changeFavIcon', payload: iconName}) //el valor del payload va ser lo que reciba la función
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = (userName:string) => {
        dispatch({type:'changeUsername', payload: userName})
    }

    return (
        <AuthContext.Provider  //Consume los cambios del context
            value={{authState, signIn, favoriteIcon, logout, changeUsername}} //El value es lo que tiene el context
        >
            {children}
        </AuthContext.Provider>
    )
}

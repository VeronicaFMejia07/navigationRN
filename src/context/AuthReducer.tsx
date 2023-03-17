import { AuthState } from './AuthContext';
//Función pura, todo lo que debe resolver internamente lo hará sin alguna interacción externa, no dispara efectos secundarios, ni console logs, es decir debe resolver con el parametro que reciba y generar un nuevo estado, SIEMPRE DEBE REGRESAR UN NUEVO ESTADO


//Se crea una acción
type AuthAction = 
|{type: 'signIn'} //Se tipa la acción que va recibir el reducer
|{type: 'changeFavIcon', payload: string} //Payload es la información adicional que se le envia a la acción
|{type:'logout'}
|{type: 'changeUsername', payload:string}


//Se tipa el reducer con la interfaz del authState, la cual estructura que tipo y que datos va a contener el estado inicial del context, esto para restringir y controlar que lo que se regrese sea de dicho tipo y evite romper la app

//El reducer recibe 2 parametros, el 1 es el estado que siempore va tener el mismo tipado del reducer, el 2 es la acción 
//Basado en la acción que se recibe y procese, se genera el nuevo estado
export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    const {type} = action;
    //Evalua el tipo de la acción y según eso retorna el nuevo estado
    //no se debe mutar el state, siempre se debe retornar el estado y modificar lo que se requiere para generar el nuevo estado
    switch (type) {
        case 'signIn':
            return {
                ...state, isLogged: true, username: 'Verónica' //Estado actual (...state), y propiedades modificadas que van a generar el nuevo estado, isLogged y username
            }
        case 'changeFavIcon':
            const { payload } = action
            return {
                ...state, favoriteIcon: payload //se asigna el valor al favoriteIcon con lo que tenga en mi payload
            }
        case 'logout':
            return {
                ...state, isLogged:false, username: undefined, favoriteIcon: undefined
            }
        case 'changeUsername':
            return {
                ...state, username: action.payload
            }
        default:
            return state;
    }

}

import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const IntailValue = {
    transations: []
}


export const GlobalContext = createContext(IntailValue)



export const GlobalProvider = ({children})=> {

    const [state, dispatch] = useReducer(AppReducer, IntailValue)

    function delTrans(id) {
        dispatch({
          type: 'DT',
          payload: id
        });
      }

      function addTransaction(transation) {
        dispatch({
          type: 'AT',
          payload: transation
        });
      }

    return (
        <GlobalContext.Provider value={
            {
                transations: state.transations,
                delTrans,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )

}
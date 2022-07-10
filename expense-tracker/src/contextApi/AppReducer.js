export default (state, action) => {
    switch(action.type){
        case 'DT':
            return {
              ...state,
              transations: state.transations.filter(transation => transation.id !== action.payload)
            }
          case 'AT':
            return {
              ...state,
              transations: [action.payload, ...state.transations]
            }
        default:
            return state;
    }
    
}
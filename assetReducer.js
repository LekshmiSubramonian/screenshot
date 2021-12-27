const initialState = {
    assetCreation : [{encode:'1',enname:'smart-reports',entype:'---'}]
}

const assetReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_ASSET':
            console.log(action.payload)
            return{
                ...state,
                assetCreation:[...state.assetCreation,action.payload]
            }
        default: return state
    }
}

export default assetReducer;
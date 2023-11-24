import type from"../types/dataTypes.types"
const initialState= {
    apiData:null
}
export default (state = initialState ,action = {}) => {
    switch (action.type){
        case type.API_DATA:
            return{
                ...state,
                apiData:action.data
            }
            default:
                return state;
    }
}
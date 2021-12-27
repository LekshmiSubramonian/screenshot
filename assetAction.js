export const addAsset = (asset) =>{
    return{
        type:'ADD_ASSET',
        payload:asset
    }
}  


export const removeAsset = (id) =>{
    return{
        type:'REMOVE_ASSET',
        payload:id
    }
} 
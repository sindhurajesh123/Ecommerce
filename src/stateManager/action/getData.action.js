

export const getData = (receivedData)=>{
    return {
        type:receivedData.type,
        data:receivedData.items
    }
}
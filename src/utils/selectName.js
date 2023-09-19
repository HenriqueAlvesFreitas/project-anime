export const selectName = (data) =>{
    let rightName = ''
    if(data.name_en !== undefined){
        rightName = data.name_en
    }
    else if(data.name_us !== undefined){
        rightName = data.name_us
    }
    else{
        rightName = data.name_jp
    }
    return rightName
}

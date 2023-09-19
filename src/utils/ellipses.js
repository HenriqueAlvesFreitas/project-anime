export const ellipsis = (data, length) =>{
    let words = data.split(' ') 

    let firstWords = words.slice(0, length)
    
    let result = firstWords.join(" ")

    return result + "..."
        
    
}
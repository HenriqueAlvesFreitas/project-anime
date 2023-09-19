import axios from "axios"

const api = 'https://kitsu.io/api/edge/'

export async function GetAllAnimes(offset, limit) {
    return await axios.get(`${api}anime?page[offset]=${offset}&page[limit]=${limit}`)
    
} 

export async function GetAnimeBySearch(search, offset, limit){
    return await axios.get(`${api}anime?filter[text]=${search}&page[limit]=${limit}&page[offset]=${offset}`)
}

export async function GetAllCategories(){
    return await axios.get(`${api}categories?page%5Blimit%5D=40&sort=-total_media_count`)
}

export async function GetAnimeByCategory(category, offset, limit){
    return await axios.get(`${api}anime?filter[categories]=${category}&page[offset]=${offset}&page[limit]=${limit}`)
}

export async function GetAnimeById(id){
    return await axios.get(`${api}anime/${id}`)
}


export async function GetAnimeByPopularity(){
    return await axios.get(`${api}anime?page%5Blimit%5D=5&sort=popularity-rank`)
}

export async function GetAnimeByRating(){
    return await axios.get(`${api}anime?page%5Blimit%5D=5&sort=-average_rating`)
}


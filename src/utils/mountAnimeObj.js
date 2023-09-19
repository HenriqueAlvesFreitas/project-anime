import { isEmpty } from "./isEmpty"

const selectSynopsis = (data) =>{
    let response = ""

    if(!isEmpty(data.attributes.synopsis)){
        response = data.attributes.synopsis
    }
    else if(!isEmpty(data.attributes.description)){
        response = data.attributes.description
    }

    return response
}

const selectImage = (data) =>{
    let response = ""
    let small = data.attributes.posterImage.small
    let original = data.attributes.posterImage.original
    let large = data.attributes.posterImage.large

    if(!isEmpty(small)){
        response = small
    }
    else if(!isEmpty(original)){
        response = original
    }
    else if(!isEmpty(large)){
        response = large
    }

    return response
}



export const mountAnimeObj = (item) =>{

    let obj ={
        id_anime: item.id,
        name_en: item.attributes.titles.en,
        name_us: item.attributes.titles.en_us,
        name_jp: item.attributes.titles.en_jp,
        rating: item.attributes.averageRating,
        rating_rank: item.attributes.ratingRank,
        popularity_rank: item.attributes.popularityRank,
        synopsis: selectSynopsis(item),
        description: item.attributes.description,
        image: selectImage(item)
    }

    return obj


}
import axios from 'axios'

const BASE_URL='https://api.themoviedb.org/3'
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN

const headers= {
    Authorization:"bearer "+TMDB_TOKEN,
}

export const fetchdatafromapi= async (url,params)=>{
    try {
        const {data} =await axios.get(BASE_URL+url+'?api_key=12844e6b6a4e0708b276c8b200fd44ca',{
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

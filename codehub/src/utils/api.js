import axios from 'axios'


const apikey='AIzaSyCo6D2sWltB2LkmNzxQvO__OvX_2qZeRLU'

export const fetchdatafromapi=(channelId)=>{
    return axios.get(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&key=${apikey}&maxResults=50`).then((res)=>{
        // console.log(res.data);
        return res.data.items
    }).catch((err)=>{
        console.log(err);
        return err
    })
}




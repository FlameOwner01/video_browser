import axios from 'axios';

const KEY = "AIzaSyBauHqPGSEA3VfKigNgY8uxmv8WoEqyw4k";


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{    
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})
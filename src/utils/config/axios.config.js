import axios from 'axios'

//Default config for AXIOS

// export default axios.create(
//     {
//         baseURL: 'https://randomuser.me/api',
//         responseType: 'json',
//         timeout: 6000,
//     }
// )

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 6000,
    }
)
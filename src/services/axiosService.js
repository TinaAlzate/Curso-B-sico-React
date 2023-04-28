import APIRequest from "../utils/config/axios.config";

// export default function getRamdomUser() {
//     return APIRequest.get('/', {
//         validateStatus: function (status){
//             return status < 500; //Resolve only if the status code is less than 500
//         }
//     }); // https://randomuser.me/api/
// }

export default function getRandomChistes() {
    return APIRequest.get('/', {
        validateStatus: function (status){
            return status < 500; //Resolve only if the status code is less than 500
        }
    }); // https://api.chucknorris.io/jokes/random/
}
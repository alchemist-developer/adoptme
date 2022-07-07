import axios from "axios";

const baseAPI = axios.create({
    baseURL: "https://adoptme-app.herokuapp.com",
    // headers: {
    //     "content-type": "application/json",
    // },
});
export const baseAPICreated = axios.create({
    baseURL: "https://adoptme-app.herokuapp.com",
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});



export default baseAPI;

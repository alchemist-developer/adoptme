import axios from "axios";

const baseAPI = axios.create({
    baseURL: "https://adoptme-app.herokuapp.com",
    headers: {
        "content-type": "application/json",
    },
});



export default baseAPI;

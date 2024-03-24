import axios from "axios";

const baseURL="http://localhost:1000";

const publicAxios=axios.create({baseURL});

const privateReq=axios.create({baseURL});

privateReq.interceptors.request.use((config)=>{

    let token=localStorage.getItem("access_token");
    console.log("token from localStorage"+" "+token);

    if(token) {
        config.headers.Authorization=`Bearer ${token}`;
    }
    else {
        console.log("token not received");
        return;
    }

    return config;
})

export {publicAxios,baseURL,privateReq};

import { privateReq, publicAxios } from "./axios.config";

function doSaveWithAxiosPost(obj)
{
    return publicAxios.post("/users/add-grower",obj,{headers:{"Content-Type":"multipart/form-data"}});
}

function doSearchAxiosGet(email)
{
    return publicAxios.get("/users/fetch-growerdata?email="+email);
}

function fetchCity()
{
    return publicAxios.get("/users/fetch-city");
}

function findGrower(obj)
{
    return publicAxios.post("/users/find-grower",obj);
}

function doValidateTokenWithAxios()
{
    return privateReq.get("/users/validate-token");
}

function doPublishValidatetoken(obj)
{
    return privateReq.post("/users/avail-product",obj)
}

function fullGrowerDetails(gemail)
{
    return publicAxios.get("/users/get-full-details?email="+gemail);
}

export {doSaveWithAxiosPost,doSearchAxiosGet,fetchCity,findGrower,doValidateTokenWithAxios,doPublishValidatetoken,fullGrowerDetails};
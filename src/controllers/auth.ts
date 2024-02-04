import { log } from "console"
import { authServices } from "../services"


export const login =(request, Response)=>{

    const {userName, password} = request.body
    authServices.prepareLogin('hi')
    console.log("login controllers");
    

}
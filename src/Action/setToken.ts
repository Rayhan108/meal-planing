"use server";
 

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
 
 
const setAccessToken = async(token : string ,redirectURL?:string) => {

    (await cookies()).set('accessToken', token);
     if(redirectURL){
        redirect(redirectURL)
     }
}
 
export default setAccessToken;
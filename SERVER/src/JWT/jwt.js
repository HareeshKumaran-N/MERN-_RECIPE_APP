import  jwt from "jsonwebtoken";
const secretKey="ForcaBarca";
export const createToken=(payload)=>{

    const token=jwt.sign(payload,secretKey);
    // console.log("token",token);
    return token;
    
}

// export const verifyToken=(token)=>{
//   console.log(jwt.verify(
//     token,secretKey
//   ));
// }

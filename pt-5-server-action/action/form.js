 "use server"
 import fs from "fs/promises"
 export const submitAction= async(e)=>{
   console.log(e.get("name"),e.get("add"));
   let a= await fs.writeFile("ashu.txt",`Name is ${e.get("name")} and address is ${e.get("add")}`)
    
    
  }
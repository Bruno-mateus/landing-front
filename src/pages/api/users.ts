import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../detabase/models/UserModel";
import { sendEmail } from "@/detabase/email/Email";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { name, lastname, email, option } = req.body;
    if (!name) {
      res.status(400).json({ message: "O campo 'nome' é obrigatório." });
      return;
    }
    
    const userCreated  = {
      name, 
      email,
      lastname,
      option
 
    }
    
    try{
      const newUser = await UserModel.create(userCreated)
      console.log(newUser)
      sendEmail(email,"Ola","bem vindo a ouss")
      res.status(200).json({ message: "Deu certo!"})
    }
    catch(e : any){
      res.status(500).json({ message: e})
    }

    

}


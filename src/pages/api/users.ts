import { sendEmail } from "@/database/email/Email";
import { UserModel } from "@/database/models/UserModel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nome, sobrenome, email, option, area } = req.body;
  console.log(nome, sobrenome, email, option, area);

  if (!nome) {
    res.status(400).json({ message: "O campo 'nome' é obrigatório." });
    return;
  }

  const userCreated = {
    nome: nome,
    email: email,
    sobrenome: sobrenome,
    perfil: option,
    area: area,
  };
  const text = "a";
  const subject = "b";
  //const NewEmail = await Email("contato@zous.com.br" , subject , text , email )

  try {
    const newUser = await UserModel.create(userCreated);
    //await enviarEmail(NewEmail);
    await sendEmail(email, subject, text);
    res.status(200);
  } catch (e: any) {
    res.status(500).json({ message: e });
  }
}

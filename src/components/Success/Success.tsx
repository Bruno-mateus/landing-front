import Image from "next/image";
import { SuccessContainer } from "./styles";
import sendMail from '../../assets/send_mail.svg'
import { HighLight } from "../HighLight/HighLight";
import { ButtonLink } from "../buttons/ButtonLink/ButtonLink";
export function Success(){
    return(
        <SuccessContainer>
            <Image src={sendMail} alt="a icon"/>
            <HighLight size="large">
                <h2>Agradecemos por colaborar com a gente!</h2>
                <p>Fica de olho no e-mail que logo mais aparecemos por lá.</p>
            </HighLight>
            <ButtonLink
              href="https://www.linkedin.com/company/ousscompany"
              target="_blank"
            >
              Seguir a Ouss
            </ButtonLink>
        </SuccessContainer>
    )
}
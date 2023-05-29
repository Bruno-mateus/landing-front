import { Button } from "../buttons/Button/Button";
import { FormContainer, InputGroup, Overlay, RadioGroup } from "./styles";
import X from "../../assets/X.svg"
import Image from "next/image";

interface FormProps{
    setActiveForm: (value:boolean)=>void
}

    export function Form({setActiveForm}:FormProps){
    return(
        <Overlay>
            <FormContainer>
                <header>
                    <button onClick={()=>setActiveForm(false)}>
                        <Image src={X} alt="botão de fechar o formulário" />
                    </button>
                </header>
                <h3>Entrar na lista de espera</h3>
                <InputGroup>
                    <label>
                        <strong>Nome</strong>
                        <input type="text" placeholder="Seu nome aqui"/>
                    </label>
                    <label>
                        <strong>Sobrenome</strong>
                        <input type="text" placeholder="Seu sobrenome aqui"/>
                    </label>
                    <label>
                        <strong>E-mail</strong>
                        <input type="email" placeholder="Seu e-mail aqui"/>
                    </label>
                    
                </InputGroup>
                <strong>Selecione seu perfil</strong>
                <RadioGroup>
                        <label>
                            <input type='radio' name="type_work"/>
                            <span>Quero trabalhar</span>
                        </label>
                        <label>
                            <input type='radio' name="type_work"/>
                            <span>Quero contratar</span>
                        </label>
                </RadioGroup>
                <Button type="button" sizeButton="full">Quero entrar na lista</Button>
                <p>
                    <small>
                        Depois de enviar seus dados, você declara estar ciente da 
                        política de privacidade e autoriza a Ouss a entrar em contato pra participar de pesquisas e testes de usabilidade que vão ajudar no crescimento da plataforma.
                    </small>
                </p>
            </FormContainer>
        </Overlay>
    )
}
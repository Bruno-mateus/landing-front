import { Button } from "../buttons/Button/Button";
import {
  FormContainer,
  FormError,
  Input,
  InputGroup,
  Overlay,
  RadioGroup,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import X from "../../assets/X.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { apiConnect } from "@/lib/axios";
import { AxiosError } from "axios";

interface FormProps {
  setActiveForm: (value: boolean) => void;
}

export function Form({ setActiveForm }: FormProps) {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    lastname: z
      .string()
      .min(3, { message: "O sobrenome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Insira um e-mail valído" }),
    option: z.enum(["trabalhar", "contratar"]),
  });

  type FormType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });




  async function handleRegister(data: FormType) {
    try {
      await apiConnect.post('users', {
        name: data.name,
        lastname: data.lastname,
        email:data.email,
        option:data.option,

      })
      
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      return console.error(err)
    }
  }




  return (
    <Overlay>
      <FormContainer onSubmit={handleSubmit(handleRegister)}>
        <header>
          <button
            onClick={() => {
              reset(), setActiveForm(false);
            }}
          >
            <Image src={X} alt="botão de fechar o formulário" />
          </button>
        </header>
        <h3>Entrar na lista de espera</h3>
        <InputGroup>
          <label>
            <strong>Nome</strong>
            <Input
              type="text"
              {...register("name")}
              placeholder="Seu nome aqui"
              inputStyle={errors.name ? "error" : "default"}
            />
            {errors.name ? <FormError>{errors.name.message}</FormError> : ""}
          </label>
          <label>
            <strong>Sobrenome</strong>
            <Input
              type="text"
              {...register("lastname")}
              placeholder="Seu sobrenome aqui"
              inputStyle={errors.lastname ? "error" : "default"}
            />
            {errors.lastname ? (
              <FormError>{errors.lastname.message}</FormError>
            ) : (
              ""
            )}
          </label>
          <label>
            <strong>E-mail</strong>
            <Input
              type="email"
              {...register("email")}
              placeholder="Seu e-mail aqui"
              inputStyle={errors.email ? "error" : "default"}
            />
            {errors.email ? <FormError>{errors.email.message}</FormError> : ""}
          </label>
        </InputGroup>
        <strong>Selecione seu perfil</strong>
        <RadioGroup>
          <label>
            <input type="radio" value="trabalhar" {...register("option")} />
            <span>Quero trabalhar</span>
          </label>
          <label>
            <input type="radio" {...register("option")} value="contratar" />
            <span>Quero contratar</span>
          </label>
          {errors.option ? <FormError>Selecione um perfil</FormError> : ""}
        </RadioGroup>
        <Button type="submit" sizeButton="full">
          Quero entrar na lista
        </Button>
        <p>
          <small>
            Depois de enviar seus dados, você declara estar ciente da política
            de privacidade e autoriza a Ouss a entrar em contato pra participar
            de pesquisas e testes de usabilidade que vão ajudar no crescimento
            da plataforma.
          </small>
        </p>
      </FormContainer>
    </Overlay>
  );
}


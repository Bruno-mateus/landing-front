import { Button } from "../buttons/Button/Button";
import {
  FormContainer,
  FormError,
  Input,
  InputGroup,
  Overlay,
  RadioGroup,
  Select,
  SelectArea,
  SelectContainer,
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
  setSuccessSubmit: (value: boolean) => void;
}

export function Form({ setActiveForm, setSuccessSubmit }: FormProps) {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    lastname: z
      .string()
      .min(3, { message: "O sobrenome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Insira um e-mail valído" }),
    option: z.enum(["candidato", "contratante"]),
    area: z.enum([
      "Gestão de produtos",
      "Jurídico",
      "Operações",
      "RH e recrutamento",
      "Educação",
      "Construção civil",
      "Sem fins lucrativos",
      "TI",
      "Vendas e CRM",
      "Design e criação",
      "Desenvolvimento de Software",
      "Marketing",
      "PMO",
      "Finanças",
      "Outro",
    ]),
  });

  type FormType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  async function handleRegister(data: FormType) {
    try {
      await apiConnect.post("users", {
        nome: data.name,
        sobrenome: data.lastname,
        email: data.email,
        option: data.option,
        area: data.area,
      });

      setSuccessSubmit(isSubmitSuccessful);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message);
        return;
      }
      return console.error(err);
    }
  }

  const selectValue = watch("area");

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
          <div>
            <label>
              <strong>Nome</strong>
              <Input
                id="name"
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
                id="lastname"
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
          </div>
          <label>
            <strong>E-mail</strong>
            <Input
              id="email"
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
            <input type="radio" value="candidato" {...register("option")} />
            <span>Quero me candidatar</span>
          </label>
          <label>
            <input type="radio" {...register("option")} value="contratante" />
            <span>Quero contratar</span>
          </label>
          {errors.option ? <FormError>Selecione um perfil</FormError> : ""}
        </RadioGroup>
        <SelectArea>
          <strong>Selecione a sua área de atuação</strong>
          <SelectContainer selectStyle={errors.area ? "error" : "default"}>
            <Select
              {...register("area")}
              defaultValue={"selecione"}
              hasValue={selectValue ? "true" : "false"}
            >
              <option value="selecione" disabled>
                Selecione
              </option>
              <option value="Gestão de produtos">Gestão de produtos</option>
              <option value="Jurídico">Jurídico</option>
              <option value="Operações">Operações</option>
              <option value="RH e recrutamento">RH e recrutamento</option>
              <option value="Educação">Educação</option>
              <option value="Construção civil">Construção civil</option>
              <option value="TI">TI</option>
              <option value="Vendas e CRM">Vendas e CRM</option>
              <option value="Design e criação">Design e criação</option>
              <option value="Desenvolvimento de Software">
                Desenvolvimento de Software
              </option>
              <option value="Marketing">Marketing</option>
              <option value="PMO">PMO</option>
              <option value="Finanças">Finanças</option>
              <option value="Outro">Outro</option>
            </Select>
          </SelectContainer>
          <FormError>
            {errors.area ? "Selecione uma área de atuação" : ""}
          </FormError>
        </SelectArea>

        <Button type="submit" disabled={isSubmitting} sizeButton="full">
          Quero entrar na lista
        </Button>
        <p>
          <small>
            Depois de enviar seus dados, você declara estar ciente da política
            de privacidade e autoriza a ZOÜS a entrar em contato pra participar
            de pesquisas e testes de usabilidade que vão ajudar no crescimento
            da plataforma.
          </small>
        </p>
      </FormContainer>
    </Overlay>
  );
}

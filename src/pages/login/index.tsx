import { MdEmail, MdLock } from "react-icons/md"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLoggin, Title, TitleLoggin, Wapper} from './styles'

import{ Api } from '../../services/api'

export const Login = () =>{

    const navigate = useNavigate();

    const onSubmit = async formData => {
        try {

            const {data} =  await Api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválido.')
            }
            
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    };

    const schema = yup.object({
        email: yup.string().email('Email não é valido').required("Campo Obrigatório"),
        password: yup.string().min(3, 'Mínimo 3 caracteres').required("Campo Obrigatório"),
    }).required();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode:'onChange',
    });


    return(<>
        
        <Header />
        <Container>
            <Column>
                <Title> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sed veritatis error commodi nulla saepe ullam veniam voluptatibus laboriosam ducimus.                             
                </Title>                
            </Column>

            <Column>
                <Wapper>
                    <TitleLoggin>Faça seu Cadastro</TitleLoggin>
                    <SubTitleLoggin>Faça seu login e make the change._</SubTitleLoggin> 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary"  type="submit"/>
                    </form>
                    <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wapper>                
            </Column>     
        </Container>
        
        </>)





}
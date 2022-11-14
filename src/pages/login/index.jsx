import { MdEmail, MdLock } from "react-icons/md"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLoggin, Title, TitleLoggin, Wapper} from './styles'


export const Login = () =>{

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/feed')

    }


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
                    <form action="">
                        <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
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
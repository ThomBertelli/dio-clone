import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import {Header} from "../../components/Header"
import bannerImage from "../../assets/banner.png"

import {Container,TextContent,Title,TitleHighLight} from './styles'


export const Home = () =>{

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')

    }

    return(<>
        
        <Header />
        <Container>
            <div>
                <Title> 
                    <TitleHighLight>
                        Implemente <br/> 
                    </TitleHighLight>
                    o seu futuro agora!                                 
                </Title>
                <TextContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo itaque, totam pariatur deserunt dolor nesciunt ipsum quis sit blanditiis reprehenderit! Dolorum reiciendis eveniet animi aliquam suscipit vel culpa eaque.    
                </TextContent>  
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>     
            </div>
            <div>
                <img src={bannerImage} alt="Imagem Banner" />    
            </div>    
        </Container>
        
        </>)





}
import React from 'react'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png'

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { IHeader } from './types';

export const Header = ({autenticado}:IHeader) => {
    return (
        <Wrapper>
            <Container>

                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}  
                </Row>

                <Row>
                {autenticado ? (
                    <>
                    <UserPicture src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
                
                    </>


                    ) : (
                    <>
                    <MenuRight href='#'> Home</MenuRight>
                    <Button title="Entrar" ></Button>
                    <Button title="Cadastrar" ></Button>
                    </>
                )} 
                </Row>

            </Container>
        </Wrapper>
    )
}

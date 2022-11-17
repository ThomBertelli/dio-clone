

import { Button } from "../../components/Button";
import {Header} from "../../components/Header"

import {Card} from "../../components/Card"

import {Container, Column,Title,TitleHighlight} from './styles'
import { UserInfo } from "../../components/UserInfo/indeex";


export const Feed = () =>{

    return(<>
        
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={35} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={88} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={77} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={98} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={25} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={55} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            <UserInfo percentual={87} nome="Pablo Henrique" image='https://github.githubassets.com/images/modules/open_graph/github-octocat.png' />
            
            </Column>
            
        </Container>
        
        </>)





}
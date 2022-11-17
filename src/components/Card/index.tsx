import React from 'react'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'
import {FiThumbsUp} from 'react-icons/fi'


export const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://www.alura.com.br/artigos/assets/construa-css-magico-variaveis-nativas/imagem1.png'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://github.githubassets.com/images/modules/open_graph/github-octocat.png'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p> Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para Curso de HTML e CSS</h4>
                <p>Projeto feito para o curso e bootcamp...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 18
                </p>
            </HasInfo>

        </Content>

    </CardContainer>
  )
}

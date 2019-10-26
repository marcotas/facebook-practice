import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
  render() {
    return (
      <Container>
        <Post />
        <Post />
        <Post />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

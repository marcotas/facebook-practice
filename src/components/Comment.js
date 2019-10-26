import React from "react";
import styled from "styled-components";

export default function Comment({ comment }) {
  return (
    <Container>
      <Avatar>
        <Image src={comment.author.avatar}></Image>
      </Avatar>

      <Content>
        <UserName>{comment.author.name}</UserName>
        {comment.content}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
`;
const Avatar = styled.div`
  margin-right: 0.75rem;
`;
const Image = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const Content = styled.div`
  padding: 1rem;
  background-color: #eee;
  border-radius: 0.8rem;
  font-size: 13px;
  font-family: "Open Sans";
`;
const UserName = styled.span`
  font-size: 13px;
  font-weight: bold;
  margin-right: 4px;
`;

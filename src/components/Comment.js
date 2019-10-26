import React from "react";
import styled from "styled-components";

export default function Comment() {
  return (
    <Container>
      <Avatar>
        <Image src={require("../assets/download.png")}></Image>
      </Avatar>

      <Content>
        <UserName>Diego Fernandes</UserName>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ipsam
        accusantium ut doloremque distinctio sequi error rerum. Molestias,
        asperiores reiciendis beatae eius temporibus ullam architecto voluptatum
        cum quo, molestiae reprehenderit.
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

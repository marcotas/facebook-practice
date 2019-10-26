import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

export default function Post() {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src={require("../assets/perfil.jpg")} />
        </Avatar>

        <div>
          <AvatarName>John Doe</AvatarName>
          <PostDate>04 jun 2019</PostDate>
        </div>
      </CardHeader>

      <PostContent>
        Pessoal, alguém sabe se a Rocketseat está contratando?
      </PostContent>

      <Line />
      <Comment />
    </Card>
  );
}

const Card = styled.div`
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: white;
  margin: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 0.5rem;
`;
const AvatarImage = styled.img`
  max-width: 32px;
  border-radius: 50%;
`;
const AvatarName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`;
const PostDate = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #9a9a9a;
`;
const PostContent = styled.div`
  margin-top: 1rem;
  font-size: 14px;
`;
const Line = styled.div`
  border-bottom: 1px solid #eee;
  margin: 1.4rem 0;
`;

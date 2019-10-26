import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

export default function Post({ post }) {
  console.log("post", post);
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src={post.author.avatar} />
        </Avatar>

        <div>
          <AvatarName>{post.author.name}</AvatarName>
          <PostDate>{post.date}</PostDate>
        </div>
      </CardHeader>

      <PostContent>{post.content}</PostContent>

      <Line />

      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
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

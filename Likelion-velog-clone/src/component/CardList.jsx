import React from "react";
import styled from "styled-components";
import like from "/src/assets/like.png";
import { useNavigate } from "react-router-dom";

function formatDate(dateString) {
  const date = new Date(dateString.replace(/-/g, "/"));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  max-width: 1280px;
  margin: 0 auto;
  gap: 20px;
  padding: 40px 0;
  justify-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  min-width: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  height: 480px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.13);
  }
  @media (max-width: 1200px) {
    max-width: 95vw;
    height: 380px;
  }
  @media (max-width: 700px) {
    max-width: 95vw;
    height: 500px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  @media (max-width: 1200px) {
    height: 160px;
  }
  @media (max-width: 700px) {
    height: 280px;
  }
`;

const Info = styled.div`
  padding: 24px 20px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  @media (max-width: 700px) {
    padding: 12px 8px 10px 8px;
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
`;

const Content = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DateRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 0.95rem;
  color: #888;
  margin-top: 8px;
`;

const CommentCount = styled.span`
  font-weight: 500;
  font-size: 0.95rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  width: 100%;
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 700px) {
    width: 22px;
    height: 22px;
  }
`;

const NameTag = styled.p`
  color: #a6a6a6;
  font-weight: 700;
  margin: 0;
`;

const Nickname = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: #333;
`;

const LikeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LikeCount = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const CardList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardListWrapper>
      {data.map((item) => (
        <Card key={item.id} onClick={() => navigate(`/post/${item.id}`)}>
          <Thumbnail src={item.thumbnailUrl} alt={item.title} />
          <Info>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
            <DateRow>
              <span>{formatDate(item.createdAt)}</span>
              <CommentCount>· 댓글 {item.commentCount}</CommentCount>
            </DateRow>
            <Divider />
            <ProfileRow>
              <ProfileDiv>
                <ProfileImg src={item.writerProfileUrl} alt="profile" />
                <NameTag>by</NameTag>
                <Nickname>{item.writerName}</Nickname>
              </ProfileDiv>
              <LikeDiv>
                <img src={like} alt="like-image" width={20} height={20} />
                <LikeCount>{item.heartCount}</LikeCount>
              </LikeDiv>
            </ProfileRow>
          </Info>
        </Card>
      ))}
    </CardListWrapper>
  );
};

export default CardList;

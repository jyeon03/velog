import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../component/Header";
import like from "/src/assets/like.png";
const { VITE_API_BASE_URL } = import.meta.env;

function formatDate(dateString) {
  const date = new Date(dateString.replace(/-/g, "/"));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

const DetailWrapper = styled.div`
  max-width: 1060px;
  margin: auto;
  padding: 48px 32px 56px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 18px;
  line-height: 1.3;
`;
const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 1.5rem;
  justify-content: space-between;
`;
const Nickname = styled.span`
  font-weight: 700;
  color: #222;
`;
const Thumbnail = styled.img`
  width: 100%;
  margin: 24px 0 32px 0;
  object-fit: cover;
  max-height: 540px;
`;
const Content = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  color: #222;
  word-break: break-word;
  margin-bottom: 32px;
`;
const LikeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border: 1px solid #e5e7eb;
  padding: 5px 20px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #222;
`;

const FollowBtn = styled.div`
  border: 1px solid green;
  padding: 5px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 500;
  color: green;
`;
const ProfileRowRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${VITE_API_BASE_URL}/boards/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <DetailWrapper>로딩 중...</DetailWrapper>;
  if (error)
    return (
      <DetailWrapper style={{ color: "red" }}>에러: {error}</DetailWrapper>
    );
  if (!post) return null;

  return (
    <DetailWrapper>
      <Header />
      <Title>{post.title}</Title>
      <ProfileRow>
        <ProfileRowRight>
          <Nickname>{post.writerName}</Nickname>
          <span>·</span>
          <span>{formatDate(post.createdAt)}</span>
        </ProfileRowRight>
        <ProfileRowRight>
          <FollowBtn>팔로우</FollowBtn>
          <LikeRow>
            <img src={like} alt="like" width={25} height={25} />
            <span>{post.heartCount}</span>
          </LikeRow>
        </ProfileRowRight>
      </ProfileRow>
      {post.thumbnailUrl && (
        <Thumbnail src={post.thumbnailUrl} alt={post.title} />
      )}
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </DetailWrapper>
  );
}

export default PostDetail;

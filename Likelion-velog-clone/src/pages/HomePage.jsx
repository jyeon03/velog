import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import NavigationBar from "../component/NavigationBar";
import CardList from "../component/CardList";
import styled from "styled-components";

const { VITE_API_BASE_URL } = import.meta.env;

const PageWrapper = styled.div`
  padding: 0 48px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
  @media (max-width: 1200px) {
    padding: 0 16px;
  }
`;

function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${VITE_API_BASE_URL}/boards`)
      .then((res) => {
        console.log(res.data); // 응답 데이터 구조 확인
        setData(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <Header />
      <NavigationBar />
      {loading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div style={{ color: "red" }}>에러: {error}</div>
      ) : (
        <CardList data={data} />
      )}
    </PageWrapper>
  );
}

export default HomePage;

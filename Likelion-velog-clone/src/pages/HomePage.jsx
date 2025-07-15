import { dummyData } from "../data/dummy_data";
import Header from "../component/Header";
import NavigationBar from "../component/NavigationBar";
import CardList from "../component/CardList";
import styled from "styled-components";

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
  return (
    <PageWrapper>
      <Header />
      <NavigationBar />
      <CardList data={dummyData} />
    </PageWrapper>
  );
}

export default HomePage;

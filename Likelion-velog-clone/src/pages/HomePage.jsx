import { dummyData } from "../data/dummy_data";
import Header from "../component/Header";
import NavigationBar from "../component/NavigationBar";
import CardList from "../component/CardList";

function HomePage() {
  return (
    <div className="pageWrapper">
      <Header />
      <NavigationBar />
      <CardList data={dummyData} />
    </div>
  );
}

export default HomePage;

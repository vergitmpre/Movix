import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";

function Home() {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
    </div>
  );
}

export default Home;

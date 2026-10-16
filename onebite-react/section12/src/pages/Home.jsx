import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [parmas, setParams] = useSearchParams();
  return <div>Home</div>;
};

export default Home;

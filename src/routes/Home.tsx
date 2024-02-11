import CodeSource from "../components/CodeSource";
import Experience from "../components/Experience";
import MainIntroduction from "../components/MainIntroduction";
import Proficiency from "../components/Proficiency";

const Home = () => {
  return (
    <>
      <MainIntroduction />
      <Experience />
      <Proficiency />
      <CodeSource />
    </>
  );
};

export default Home;

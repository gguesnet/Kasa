import "../App.css";

import Header from "../components//Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home({ data }) {
  return (
    <>
      <Header />
      <Banner
        title="Chez vous, partout et ailleurs"
        img="/public/img/background_mountain.jpeg"
      />
      <Main data={data} />
      <Footer />
    </>
  );
}

export default Home;

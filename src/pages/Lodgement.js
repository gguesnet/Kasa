import "../App.css";

import Header from "../components/Header";
import Location from "../components/Location";
import Footer from "../components/Footer";

function Lodgement({ data }) {
  return (
    <>
      <Header />
      <Location data={data} />
      <Footer />
    </>
  );
}

export default Lodgement;

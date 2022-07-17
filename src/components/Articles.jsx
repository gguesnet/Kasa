import { Link } from "react-router-dom";
import Thumb from "./Thumb";

function Articles({ data }) {
  return (
    <section className="location-list">
      {data.map(({ title, cover, id }) => {
        return (
          <Link key={id} to={`/location/${id}`}>
            <Thumb cover={cover} title={title} />
          </Link>
        );
      })}
    </section>
  );
}

export default Articles;

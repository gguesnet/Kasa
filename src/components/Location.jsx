import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import Rating from "./Rating";
import Dropdown from "./Dropdown";
import Tag from "./Tag";

function Location({ data }) {
  const { locationID } = useParams();

  const filterData = data.find((location) => location.id === locationID);

  const {
    title,
    description,
    location,
    tags,
    pictures,
    equipments,
    host,
    rating,
  } = filterData;

  const [firstname, lastname] = filterData.host.name.split(" ");

  return (
    <section>
      <div className="wrapper">
        <Carrousel pictures={pictures} />
        <div className="title-head">
          <div className="info-block">
            <h2>{title}</h2>
            <p className="location">{location}</p>
          </div>
          <div className="owner-block">
            <p>
              {firstname}
              <br />
              {lastname}
            </p>
            <img
              alt="Propriétaire"
              className="host-picture"
              src={host.picture}
              width="64"
              height="64"
            />
          </div>
        </div>

        <div className="tag-block">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
          <Rating rating={rating} />
        </div>
        <aside>
          <Dropdown title="Description" content={description} />
          <Dropdown title="Équipement" content={equipments} />
        </aside>
      </div>
    </section>
  );
}

export default Location;

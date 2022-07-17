function Carrousel({ pictures }) {
  return (
    <div className="slideshow">
      <input
        type="radio"
        id="bouton-1"
        name="radio-set"
        className="selecteur-1"
        defaultChecked="checked"
      />
      <label htmlFor="bouton-1" className="bouton-label-1" />
      <input
        type="radio"
        id="bouton-2"
        name="radio-set"
        className="selecteur-2"
      />
      <label htmlFor="bouton-2" className="bouton-label-2" />
      <input
        type="radio"
        id="bouton-3"
        name="radio-set"
        className="selecteur-3"
      />
      <label htmlFor="bouton-3" className="bouton-label-3" />
      <input
        type="radio"
        id="bouton-4"
        name="radio-set"
        className="selecteur-4"
      />
      <label htmlFor="bouton-4" className="bouton-label-4" />
      <label htmlFor="bouton-1" className="arrow a1" />
      <label htmlFor="bouton-2" className="arrow a2" />
      <label htmlFor="bouton-3" className="arrow a3" />
      <label htmlFor="bouton-4" className="arrow a4" />
      <div className="contenu">
        <ul className="slider">
          {pictures.map((picture, i) => (
            <li key={i}>
              <img src={picture} alt="Appartement" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carrousel;

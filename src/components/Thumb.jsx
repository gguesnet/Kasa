function Thumb({ title, cover }) {
  return (
    <article
      style={{
        backgroundImage: "url(" + cover + ")",
        backgroundSize: "cover",
      }}
    >
      <h3>{title}</h3>
    </article>
  );
}

export default Thumb;

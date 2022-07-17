function Dropdown({ title, content }) {
  return (
    <details>
      <summary>{title}</summary>
      <div>
        {Array.isArray(content) ? (
          <ul>
            {content.map((S, i) => (
              <li key={i}>{S}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </details>
  );
}

export default Dropdown;

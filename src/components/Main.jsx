import Articles from "./Articles";

function Main({ data }) {
  console.log(data);
  return (
    <main>
      <div className="wrapper">
        <Articles data={data} />
      </div>
    </main>
  );
}

export default Main;

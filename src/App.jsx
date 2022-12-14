import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./components/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <div className="container">
        <Header />
        <section className="card--section">{cards}</section>
      </div>
    </>
  );
}

export default App;

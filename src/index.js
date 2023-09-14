import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
// import App from "./App";

function App() {
  return (
    <div className="body">
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />
      <Newsfeed />
      <Article>
        <Information
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          author="Steve Hanley"
          information="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
        />
        <Information
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          author="Milenio Digital"
          information="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares..."
          image="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
        />
        <Information
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          author="Maria Merano"
          information="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles..."
          image="https://www.teslarati.com/wp-content/uploads/2020/11/tesla-model-3-heat-pump-refresh.jpeg"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
        />
        <Information
          title="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          author="Newsroom Infobae"
          information="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo..."
          link="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
        />
      </Article>
    </div>
  );
}

function Newsfeed(props) {
  return (
    <div className="newsfeed">
      <h2>My news feed</h2>
    </div>
  );
}

function Article(props) {
  return <div className="work-title">{props.children}</div>;
}

function Information(props) {
  let image;
  if (!props.image) {
    image = "https://placehold.co/600x400?text=News+Story";
  } else {
    image = props.image;
  }
  return (
    <div className="container">
      <div>
        <img className="news-img" src={image} alt="" />
      </div>
      <div className="article-details">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <span className="title">{props.title}</span>
        </a>
        <span className="author">By: {props.author}</span>
        <span className="information">{props.information}</span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

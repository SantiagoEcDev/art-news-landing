import "./NewsSection.css";
import { NewsCard } from "../NewsCard/NewsCard";
import Castle from "./Castle.png";
import Venice from "./Venice.png";
import Museum from "./Museum.png";

export const NewsSection = () => {
  return (
    <main className="news-section-container">
      <h2 className="news-section-title">Newest reads</h2>
      <NewsCard
        image={Castle}
        date={"5 August, 2022"}
        title={
          "Picasso’s muse as sea creature—will it break $100m at Sotheby's New York sale?"
        }
      />
      <NewsCard
        image={Museum}
        date={"5 August, 2022"}
        title={
          "France seeks to protect Russia's Morozov collection from seizure as masterpieces return home"
        }
      />
      <NewsCard
        image={Venice}
        date={"5 August, 2022"}
        title={
          "Venice Biennale 2022: all the national pavilions, artists and curators"
        }
      />
    </main>
  );
};

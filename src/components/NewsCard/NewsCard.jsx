import "./NewsCard.css";
import { BiRightArrowAlt } from "react-icons/bi";

export const NewsCard = ({ image, date, title, url }) => {
  return (
    <article className="news-card">
      <div className="news-card-image-container">
        <img className="news-card-image" src={image} alt="" />
      </div>
      <div className="news-card-info">
        <p className="news-card-date">{date}</p>
        <h3 className="news-card-title">{title}</h3>
        <a className="news-card-callToAction" href={url}>
          Read more <BiRightArrowAlt />
        </a>
      </div>
    </article>
  );
};

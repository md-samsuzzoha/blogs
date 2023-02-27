import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Pic from "../../assets/pic.png";
import "./Home.scss";
import environment from "../../environment";
import { useEffect } from "react";
import axios from "axios";
import useTopNewsFetching from "./hooks/useTopNewsFetching/useTopNesFetching";
import ContentHeader from "../Content Header/ContentHeader";
import { Link, useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const { data, isLoading, error, request } = useTopNewsFetching();
  const navigate = useNavigate();

  useEffect(() => {
    request("newest");
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleLikeClick = () => {
    navigate('/likes');
  };
  const handleSelect = (orderBy: string) => {
    request(orderBy);
  };
  const imageSrc = (html?: string) => {
    if (html) {
      const regex = /<img.*?src="(.*?)"/;
      return regex.exec(html)?.[1];
    }
    return '';
  };

  return (
    <>
      <ContentHeader
        title="Top Stories"
        onclickLike={handleLikeClick}
        onSelect={handleSelect}
      />
      {isLoading && <Loader />}
      <div className="cards-container">
        {data?.response.results.map((article, index) => (
          <Link
            to={`/article/${encodeURIComponent(article.id)}`}
            className={`card-wrapper ${index === 0 ? "first" : ""}`}
            key={article.id}
          >
            <Card title={article.webTitle} imgUrl={imageSrc(article.fields?.main)} body={article.fields.trailText} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

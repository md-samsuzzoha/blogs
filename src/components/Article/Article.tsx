import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLikeContext } from "../../contexts/Like.context";
import LikeButton from "../LikeButton/LikeButton";
import './Article.scss';
import Loader from "../Loader/Loader";
import useArticleFetching from "./hooks/useArticleFetching/useArticleFetching";

const Article = (): JSX.Element => {
  const { request, data, isLoading } = useArticleFetching();
  const { checkIfLikeed, addLike, removeLike } =
    useLikeContext();
  const [isLikeed, setIsLikeed] = useState<boolean>();
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      request(id);
      setIsLikeed(checkIfLikeed(id));
    }
  }, [id]);

  const handleLikeClick = () => {
    if (isLikeed && id) {
      const isSuccess = removeLike(id);
      if (isSuccess) setIsLikeed(false);
    } else if (!isLikeed && id && data) {
      const isSuccess = addLike({
        id: id,
        webTitle: data.response.content.webTitle,
        trailText: data.response.content.fields.trailText,
      });
      if (isSuccess) setIsLikeed(true);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <article className='article-container'>
          <LikeButton
            text={isLikeed ? "Remove Like" : "Add Like"}
            onClick={handleLikeClick}
          />
          <p>{data.response.content.webPublicationDate}</p>
          <h1>{data.response.content.webTitle}</h1>
          <h4
            dangerouslySetInnerHTML={{
              __html: data.response.content.fields.trailText,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: data.response.content.fields.body,
            }}
          ></p>
          <section
            className="figure"
            dangerouslySetInnerHTML={{
              __html: data.response.content.fields.main,
            }}
          ></section>
        </article>
      )}
    </>
  );
};
export default Article;

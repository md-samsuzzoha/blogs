import { Link } from "react-router-dom";
import { useLikeContext } from "../../contexts/Like.context";
import Card from "../Card/Card";
import ContentHeader from "../Content Header/ContentHeader";
import './Likes.scss';

const Likes = (): JSX.Element => {
  const { likes } = useLikeContext();
  const selectHandler = (orderBy: string) => {};
  return (
    <section>
      <ContentHeader
        title="All Liked Articles"
        isLikeVisible={false}
        onSelect={selectHandler}
      />
      <div className="cards-container">
        {likes.map((like) => (
          <Link
            to={`/article/${encodeURIComponent(like.id)}`}
            className={`card-wrapper`}
            key={like.id}
          >
            <Card title={like.webTitle} body={like.trailText} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Likes;

import { ChangeEvent } from "react";
import LikeButton from "../LikeButton/LikeButton";
import "./ContentHeader.scss";

interface Props {
  title: string;
  isLikeVisible?: boolean;
  onclickLike?: () => void;
  onSelect: (orderBy: string) => void;
}
const ContentHeader = ({
  title,
  isLikeVisible = true,
  onclickLike,
  onSelect,
}: Props): JSX.Element => {

  const handleLikeClick = () => {
    onclickLike?.();
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  }

  return (
    <header className="content-header">
      <h1>{title}</h1>
      <div className="right-container">
        {isLikeVisible && (
          <LikeButton text="View Liked Article" onClick={handleLikeClick} />
        )}
        <select className="select" aria-label="State" onChange={handleSelect}>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </header>
  );
};

export default ContentHeader;

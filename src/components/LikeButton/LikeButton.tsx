import LikeIcon from "../../assets/icons/like.svg";
import Button from "../Button/Button";
import './LikeButton.scss';

interface Props {
  text: string;
  onClick: () => void;
}
const LikeButton = ({ text, onClick }: Props): JSX.Element => {
  return (
    <Button className="LikeButton" type="button" onClick={onClick}>
      <img src={LikeIcon} alt="like" />
      <span>{text.toUpperCase()}</span>
    </Button>
  );
};
export default LikeButton;

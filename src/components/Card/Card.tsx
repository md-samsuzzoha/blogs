import "./Card.scss";
import Logo from "../../assets/logo.svg";

interface Props {
  imgUrl?: string;
  title: string;
  body: string;
}
const Card = ({ imgUrl, title, body }: Props): JSX.Element => {
  return (
    <section className="card-section">
      {imgUrl ? (
        <img src={imgUrl} alt="card" />
      ) : (
        <div className="defaultImg">
          <img src={Logo} alt="default" />
        </div>
      )}
      <section className="text-wrapper">
        <header>{title}</header>
        <p dangerouslySetInnerHTML={{ __html: body }}></p>
      </section>
    </section>
  );
};
export default Card;

import { ReactNode, useEffect, useState, MouseEvent } from "react";
import "./Button.scss";

interface Props {
  children: ReactNode;
  className: string;
  type: "button" | "reset" | "submit";
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, onClick, type, className }: Props): JSX.Element => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    onClick?.(event);
  };

  return (
    <button type={type} className={`ripple-button ${className}`} onClick={handleClick}>
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

export default Button;

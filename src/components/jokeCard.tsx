import { FC } from "react";

type Props = {
    onAction: Function,
    children: JSX.Element | JSX.Element[]
}

export const JokeCard: FC<Props> = ({ onAction, children }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "150px",
    borderRadius: "2px",
    boxShadow: "1px 1px #888888",
  };

  const cardBody = {
    overflow: "hidden",
    flex: "3",
  };

  const cardFooter = {
    textAlign: "right",    
  };

  const button = {
    cursor: "pointer",
    padding: "5px",
    color: "blue"
  }

  return (
    <div style={cardStyle}>
      <div style={cardBody}>{children}</div>
      <div style={cardFooter}>
        <span style={button} onClick={onAction}>See More</span>
      </div>
    </div>
  );
};

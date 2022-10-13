import { FC } from "react";
import { COLOR } from "../constants/color";
import { FONT } from "../constants/font";
import path3 from "../assets/path-3.png";
import greenLight from "../assets/green-light.png";

type Props = {
  onAction: Function;
  children: JSX.Element | JSX.Element[];
};

export const JokeCard: FC<Props> = ({ onAction, children }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    width: "360px",
    height: "264px",
    border: `1px solid ${COLOR.WHITE_THREE}`,
    backgroundColor: `${COLOR.WHITE_TWO}`,
    borderRadius: "2px",
    boxShadow: "0 1px 7px 0 rgba(0, 0, 0, 0.15)",
    fontFamily: `${FONT.FONT_FAMILY}`,
  };

  const cardBody = {
    overflow: "hidden",
    flex: "3",
    color: "#303030",
    fontSize: "14px",
    fontWeight: "regular",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57",
    letterSpacing: "normal",
    margin: "0px 16px 16px",
  };

  const cardHeader = {
    color: "#cfb995",
    margin: "8px 16px 4px",
    fontSize: "16px",
    fontWeight: "600",
  };

  const cardFooter = {
    textAlign: "right",
    padding: "16px 12px 8px",
  };

  const button = {
    cursor: "pointer",
    padding: "6px",
    color: "#cfb995",
    fontWeight: "600",
  };

  return (
    <div className="card-body" style={cardStyle}>
      <div style={cardHeader}>
        <span style={{paddingRight: "4px" }}>
          <img src={greenLight} />
        </span>
        JOKE HEADER
      </div>
      <div style={cardBody}>{children}</div>
      <div style={cardFooter}>
        <span style={button} onClick={onAction}>
          SEE STATS
        </span>
        <span>
          <img src={path3} />
        </span>
      </div>
    </div>
  );
};

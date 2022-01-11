import Tilt from "react-tilt";

import imgBottom from "assets/images/image-avatar.png";
import imgTop from "assets/images/image-equilibrium.jpg";

import { Container } from "./index.styled";

type Props = {
  tilt?: boolean;
  footerImgSrc?: string;
  footerDsc: string;
  imageSrc?: string;
  subTitle: string;
  time: string;
  title: string;
  value: string;
};

export function Card(props: Props) {
  const { tilt = false, footerDsc, footerImgSrc = imgBottom, imageSrc = imgTop, subTitle, time, title, value } = props;

  return (
    <Tilt className="Tilt" options={{ max: tilt ? 50 : 0, reverse: true }}>
      <Container>
        <img className="top-image" src={imageSrc} alt="Imagem do equilibrium" />
        <span className="title">{title}</span>
        <span className="subtitle">{subTitle}</span>
        <div className="values-time">
          <div className="value">
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span>{value}</span>
          </div>
          <div className="time">{time}</div>
        </div>
        <div className="separator" />
        <div className="footer-container">
          <img className="footer-image" src={footerImgSrc} alt="Imagem do usuário" />
          <span className="name">
            Creation of <span className="white">{footerDsc}</span>
          </span>
        </div>
      </Container>
    </Tilt>
  );
}

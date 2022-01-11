import img from "assets/images/image-avatar.png";

import { Card } from "components/Card";

import { Container } from "./index.styled";

export function Home() {
  return (
    <Container>
      <Card
        footerDsc="Jules Wyvern"
        footerImgSrc={img}
        subTitle="Our Equilibrium collection promotes balance and calm."
        tilt
        time="3 days left"
        title="Equilibrium #3429"
        value="R$ 0,50"
      />
    </Container>
  );
}

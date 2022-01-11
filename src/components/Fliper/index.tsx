import { Container } from "./index.styled";

type Props = {
  frontDiv: React.ReactNode;
  backDiv: React.ReactNode;
};

export function Fliper(props: Props) {
  const { frontDiv, backDiv } = props;
  return (
    <Container>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">{frontDiv}</div>
          <div className="flip-card-back">{backDiv}</div>
        </div>
      </div>
    </Container>
  );
}

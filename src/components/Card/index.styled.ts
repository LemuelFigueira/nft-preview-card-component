import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  max-width: 400px;

  border-radius: 8px;
  padding: 1em;
  gap: 1em;

  background: #15273f;

  font-family: "Outfit", sans-serif;

  aspect-ratio: 4/3;
  user-select: none;

  .title {
    font-size: 1.5em;
    font-weight: 600;
    color: #fff;
  }

  .subtitle {
    font-size: 1em;
    font-weight: 400;
    color: #6b89b2;
  }

  .top-image {
    border-radius: 8px;
    width: 100%;

    max-height: 300px;

    aspect-ratio: 9 / 16;

    pointer-events: none;
  }

  .values-time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    width: 100%;

    .value {
      display: flex;

      align-items: center;
      justify-content: center;

      vertical-align: middle;
      text-align: center;

      gap: 5px;

      span {
        color: #00fff8;
      }
    }

    .time {
      color: #9eb8dd;
    }
  }

  .separator {
    height: 1px;
    width: 100%;

    transform: filter(0.8);

    background: #6b89b2;
  }

  .footer-container {
    display: flex;

    align-items: center;
    justify-content: flex-start;

    width: 100%;
    gap: 15px;

    .name {
      color: #6b89b2;
      .white {
        color: #fff;
      }
    }

    .footer-image {
      padding: 0;
      width: 10%;

      aspect-ratio: 1/1;

      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
`;

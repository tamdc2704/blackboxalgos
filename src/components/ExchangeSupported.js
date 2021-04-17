import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
`;

const moveInLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
`;

const Wrapper = styled.div`
  margin: 70px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-family: "sofia";
`;

const Title = styled.div`
  position: relative;
  z-index: 1;
`;

const BackgroundTitle = styled.h2`
  h2 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2rem;
    margin-top: 0;
  }
  span {
    background-color: #fff;
    padding: 0 15px;
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: 400;
    color: rgba(2, 28, 82, 0.84);
  }
  ::before {
    border-top: 1.5px solid rgba(168, 168, 168, 0.37);
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 96%;
    z-index: -1;
  }
`;

const Container = styled.div`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  ::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 96%;
    padding-top: 12px;
    border-bottom: 1.5px solid rgba(168, 168, 168, 0.37);
  }
`;

const Exchange = styled.div`
  visibility: visible;
  animation: ${fadeInUp} 1s ease-in-out 0.3s both;
  display: inline-block;
  align-content: center;
  padding: 20px;

  img {
    filter: grayscale(100%);
    width: 135px;
    vertical-align: middle;
    border-style: none;
  }

  :hover img {
    filter: none;
    transform: scale(1.03);
  }
`;

const ExchangeSupported = () => (
  <Wrapper id="exchange-supported">
    <Title>
      <BackgroundTitle>
        <span>Supported Exchanges</span>
      </BackgroundTitle>
    </Title>
    <Container>
      <Exchange>
        <a href="#exchange-supported">
          <img src="bybit.png" alt="exchange_img" />
        </a>
      </Exchange>

      <Exchange>
        <a href="#exchange-supported">
          <img src="kucoin.png" alt="exchange_img" />
        </a>
      </Exchange>

      <Exchange>
        <a href="#exchange-supported">
          <img src="bitmex.png" alt="exchange_img" />
        </a>
      </Exchange>
      <Exchange>
        <a href="#exchange-supported">
          <img src="houbi.png" alt="exchange_img" />
        </a>
      </Exchange>
      <Exchange>
        <a href="#exchange-supported">
          <img src="bittrex.png" alt="exchange_img" />
        </a>
      </Exchange>
      <Exchange>
        <a href="#exchange-supported">
          <img src="binance-future.png" alt="exchange_img" />
        </a>
      </Exchange>
    </Container>
  </Wrapper>
);

export default ExchangeSupported;

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #1f928c;
  padding: 70px;
  color: #fff;
`;
const Title = styled.div`
  padding-bottom: 40px;
  h2 {
    font-family: "Lexend Deca";
    font-size: 38px;
  }
`;
const Container = styled.div``;
const CardDeck = styled.div``;
const Card = styled.div`
  min-width: 220px;
  background-color: transparent;
  border-color: #fff;

  .card-header {
    border-bottom-color: #fff;
    font-family: "Lexend Deca";
  }

  .card-body ul {
    font-family: "Montserrat";
    font-size: 20px;
  }
`;

const Pricing = () => (
  <Wrapper id="pricing">
    <Title>
      <h2>Subscription Plans &amp; Pricing</h2>
    </Title>
    <Container className="container lg-12 mb-12">
      <CardDeck className="card-deck lg-3 mb-3 text-center">
        {pricingData.map((item) => (
          <CardComponent key={item.plan} {...item} />
        ))}
      </CardDeck>
    </Container>
  </Wrapper>
);

const CardComponent = ({ plan, price, benefits }) => (
  <Card className="card mb-4 box-shadow" key={plan}>
    <div className="card-header">
      <h4 className="my-0 font-weight-normal">{plan}</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title pricing-card-title">
        ${price} <small className="">/ mo</small>
      </h1>
      <ul className="list-unstyled mt-3 mb-4">
        {benefits.map((benefit, idx) => (
          <li key={idx}>{benefit}</li>
        ))}
      </ul>
    </div>
  </Card>
);

const pricingData = [
  {
    plan: "Beginner",
    price: "19",
    benefits: [
      "Telegram Bot Integration",
      "Trading Notifications",
      "Customer Support",
    ],
  },
  {
    plan: "Intermediate",
    price: "29",
    benefits: [
      "Telegram Bot Integration",
      "Trading Notifications",
      "Customer Support",
      "Primary API Slots",
    ],
  },
  {
    plan: "PRO",
    price: "49",
    benefits: [
      "Telegram Bot Integration",
      "Trading Notifications",
      "Customer Support",
      "Primary API Slots",
      "Trading View Integration",
    ],
  },
];

export default Pricing;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

const SectionListItem = () => (
  <div className="section3" id="product">
    <Container>
      <Row className="mb-5">
        <Col className="desc">
          <h1
            style={{
              fontWeight: 600,
              marginBottom: 40,
              fontSize: "2.5rem",
            }}
          >
            BlackBoxAlgos at a glance
          </h1>
          <div>
            <div className="text mx-auto">
              Automate your trading based on our trading platform, with simple
              config. Use leading edge trading features to minimize risk, and
              maximize the profit.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Item
          imgSrc="brain.svg"
          title="Our Trading Engine. At your beck and call."
          content="Behind the scenes a powerful trading engine built on distributed architecture is connecting with multiple data providers to fetch near real-time data of multiple exchanges around the world in Currencies, Futures."
        />

        <Item
          imgSrc="lotus.svg"
          title="The magic of our strategy building wizard."
          content="Looking for a vol skew? A simple buy and hold? A complex market making, maybe? Or maybe you have no idea what any of this means. No worries. We’ve got you covered."
        />

        <Item
          imgSrc="castle.svg"
          title="Safe and Secure"
          content="BlackBoxAlgos uses advanced network security architectures. In addition, your funds always stays directly in your exchange and withdrawal permissions are not needed."
        />

        <Item
          imgSrc="trees.svg"
          title="Our backtesting engine. Before going forward."
          content="Our backtesting engine will test your strategies in real-time with historical data before you go live. Your backtesting results will offer you deep insights into how your strategy could perform going forward."
        />
      </Row>
    </Container>
  </div>
);

const Item = ({ imgSrc, title, content }) => {
  return (
    <Col lg={6} md={6} xs={12} style={{ marginBottom: 45 }}>
      <Media lg={6}>
        <img
          width={75}
          height={75}
          className="mr-3"
          src={imgSrc}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="text-left">{title}</h5>
          <p className="text-left">{content}</p>
        </Media.Body>
      </Media>
    </Col>
  );
};

export default SectionListItem;

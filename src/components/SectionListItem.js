import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

const SectionListItem = () => (
  <div className="section3">
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
            Zilliqa at a glance
          </h1>
          <div>
            <div className="text mx-auto">
              We're committed to delivering a scalable and secure platform for
              developers and enterprises who wish to build decentralised
              applications.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Item
          imgSrc="https://zilliqa.dexecure.net/tild6662-3462-4466-b234-636332613339/zilliqa_icon_brain_2.svg"
          title="Media Heading"
          content="Cras sit amet nibh libero, in gravida nulla. Nulla vel metusscelerisque ante sollicitudin commodo. Cras purus odio,
              vestibulum in vulputate at, tempus viverra turpis. Fusce
              condimentum nunc ac nisi vulputate fringilla. Donec lacinia
              congue felis in faucibus."
        />

        <Item
          imgSrc="https://zilliqa.dexecure.net/tild6237-6131-4136-b563-343966656532/zilliqa_icon_roadmap.svg"
          title="Mainnet Live Since Early 2019"
          content="With the launch of our mainnet in January 2019, we became the first public blockchain platform in the world to successfully utilise sharding as a scaling solution. Visit our Research and Development Roadmap 2020 to see what's coming next."
        />

        <Item
          imgSrc="https://zilliqa.dexecure.net/tild3538-3763-4232-b639-313464383839/zilliqa_icon_shardin.svg"
          title="Mainnet Live Since Early 2019"
          content="With the launch of our mainnet in January 2019, we became the first public blockchain platform in the world to successfully utilise sharding as a scaling solution. Visit our Research and Development Roadmap 2020 to see what's coming next."
        />

        <Item
          imgSrc="https://zilliqa.dexecure.net/tild3138-6631-4933-b738-613461653161/zilliqa_icon_smart_c.svg"
          title="Mainnet Live Since Early 2019"
          content="With the launch of our mainnet in January 2019, we became the first public blockchain platform in the world to successfully utilise sharding as a scaling solution. Visit our Research and Development Roadmap 2020 to see what's coming next."
        />

        <Item
          imgSrc="https://zilliqa.dexecure.net/tild6530-6330-4366-b161-356336656539/Tilda_Icons_44_trave.svg"
          title="Mainnet Live Since Early 2019"
          content="With the launch of our mainnet in January 2019, we became the first public blockchain platform in the world to successfully utilise sharding as a scaling solution. Visit our Research and Development Roadmap 2020 to see what's coming next."
        />

        <Item
          imgSrc="https://zilliqa.dexecure.net/tild3334-3362-4530-b739-633635363538/zilliqa_icon_ecosyst.svg"
          title="Mainnet Live Since Early 2019"
          content="With the launch of our mainnet in January 2019, we became the first public blockchain platform in the world to successfully utilise sharding as a scaling solution. Visit our Research and Development Roadmap 2020 to see what's coming next."
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

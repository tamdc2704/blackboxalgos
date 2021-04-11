import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef } from "react";

const Section2Img = () => (
  <div className="section5">
    <Row>
      <ItemTemplate
        bgImg="https://zilliqa.dexecure.net/tild6537-6336-4033-b962-353733666331/web_home_final-02.png"
        title="Get $ZIL with transak"
        content="A simple and compliant way for you to convert your EUR, INR and/or GBP into $ZIL. Supported by Google Chrome, Safari, and Firefox."
        btnText="Purchase $ZIL"
      />
      <ItemTemplate
        bgImg="https://zilliqa.dexecure.net/tild3165-3563-4137-b630-396131613465/web_home_final-03.png"
        title="Zilliqa Merchandise"
        content="An online store with over 400 exclusive Zilliqa merchandise, including t-shirts, hoodies, mugs, mousepads, and more to come!"
        btnText="Utilise $ZIL"
      />
    </Row>
  </div>
);

const ItemTemplate = ({ bgImg, title, content, btnText }) => {
  const btn = useRef();

  const moveEnter = () => {
    btn.current.style.color = "#000";
    btn.current.style.backgroundColor = "#fff";
  };
  const moveLeave = () => {
    btn.current.style.color = "#fff";
    btn.current.style.backgroundColor = "transparent";
  };

  return (
    <Col
      lg={6}
      md={6}
      xs={12}
      style={{
        position: "relative",
        height: "37.5vw",
        display: "table",
        overflow: "hidden",
      }}
      className="wrapper"
    >
      <div
        className="bgImage"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          inset: 0,
          display: "table-cell",
          transition: "all ease-in-out .25s",
          height: "100%",
          width: "100%",
        }}
      ></div>
      <div
        className="overlay"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "-webkit-linear-gradient(top, rgba(0,0,0,0.80), rgba(0,0,0,0.70))",
          transition: "all ease-in-out .25s",
        }}
      ></div>
      <div
        style={{
          padding: "20px 40px",
          position: "relative",
          transition: "all ease-in-out .25s",
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 32,
              lineHeight: "1.23",
              color: "#fff",
              wordBreak: "break-word",
              fontWeight: "600",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 14,
              marginTop: 20,
              lineHeight: "1.55",
              color: "#fff",
            }}
          >
            {content}
          </div>
          <div
            ref={btn}
            onMouseOver={moveEnter}
            onMouseLeave={moveLeave}
            style={{
              display: "inline-block",
              marginTop: 40,
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: 30,
              fontWeight: "500",
              height: 45,
              fontSize: 14,
              paddingLeft: 30,
              paddingRight: 30,
              cursor: "pointer",
            }}
          >
            <div style={{ display: "table", height: "100%", width: "100%" }}>
              <span style={{ display: "table-cell", verticalAlign: "middle" }}>
                {btnText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Section2Img;

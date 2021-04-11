import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionTemplate1 = ({
  className,
  bgColor,
  color,
  imgSrc,
  title,
  content,
  button: { btnText, btnColor },
}) => {
  const btn = useRef();

  const moveEnter = (newColor, oldColor) => {
    btn.current.style.color = oldColor;
    btn.current.style.backgroundColor = newColor;
  };
  const moveLeave = (newColor, oldColor) => {
    btn.current.style.color = newColor;
    btn.current.style.backgroundColor = oldColor;
  };

  return (
    <div
      className={className}
      style={{ paddingTop: 105, paddingBottom: 90, backgroundColor: bgColor }}
    >
      <Container>
        <Row>
          <Col lg={6} md={6} xs={12} className="mt-auto mb-auto">
            <img style={{ width: "100%" }} src={imgSrc} />
          </Col>
          <Col lg={6} md={6} xs={12} className="mt-auto mb-auto">
            <Container>
              <div
                className="title text-left"
                style={{
                  color: color,
                  paddingBottom: 28,
                  fontSize: 30,
                  lineHeight: "1.17",
                  fontWeight: 600,
                }}
              >
                {title}
              </div>
              {content && (
                <div
                  className="content text-left"
                  style={{
                    color: color,
                    fontSize: 18,
                    lineHeight: "1.55",
                    opacity: 0.85,
                  }}
                >
                  {content}
                </div>
              )}
              {btnText && (
                <div
                  ref={btn}
                  className="button"
                  onMouseOver={() => moveEnter(btnColor, bgColor)}
                  onMouseLeave={() => moveLeave(btnColor, bgColor)}
                  style={{
                    color: btnColor,
                    border: `1px solid ${btnColor}`,
                    borderRadius: 30,
                    fontWeight: 500,
                    height: 60,
                    fontSize: 16,
                    paddingLeft: 60,
                    paddingRight: 60,
                    marginTop: 60,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    width: "fit-content",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  <table style={{ width: "100%", height: "100%" }}>
                    <tbody>
                      <tr>
                        <td>{btnText}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionTemplate1;

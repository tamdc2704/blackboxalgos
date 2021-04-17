import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Section from "./components/SectionTemplate1";
import SectionListItem from "./components/SectionListItem";
import Footer from "./components/Footer";
import "./App.css";
import Section2Img from "./components/Section2Img";
import ExchangeSupported from "./components/ExchangeSupported";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Header />

      {/* SECTIONS */}

      {/* 1st section */}
      <div className="section1">
        {/* <div className="circle">
          <div>
            <span>Automated Trading Platform</span>
          </div>
        </div> */}
      </div>

      {/* 2nd section */}
      <div className="section2">
        <div className="animation-wrapper">
          <div className="text">
            Emotions, the main enemy of trading. <br />
            Emotions, luckily things machine lack of. And then ... <br />
            <strong>BlackBoxAlgos</strong>
            , the box contains a trading machine, <br />
            that you need!
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <SectionListItem />

      {/* 5th */}
      {/* <Section2Img /> */}
      <Section
        id="feature"
        className="section8 section"
        bgColor="#14677a"
        color="#fff"
        imgSrc="https://zilliqa.dexecure.net/tild3734-3563-4435-b732-306565343061/webiste_stakingservi.png"
        title="Zilliqa Improvement Proposal (ZIP-11)"
        content="This new ZIP-11 outlines the details of the non-custodial staking service that is currently being built for our core protocol.

        Key Highlights:-
        Uncapped staking with APR of 5-7%
        Governance token farming - $gZIL issued alongside $ZIL staking rewards
        Implementation is completed and testing of contracts is in the final stages"
        button={{ btnColor: "#fff", btnText: "Learn more about ZIP-11" }}
      />

      {/* 9th */}
      <Section
        id="feature2"
        className="section9 section"
        bgColor="#ffc300"
        color="#000"
        imgSrc="https://zilliqa.dexecure.net/tild3864-6630-4230-b061-333339353635/zilliqa_website_zilh.gif"
        title="Learn, Build and Accelerate"
        content="ZILHive brings together all our ecosystem initiatives - our accelerator, grants and educational programmes. By opening our doors to talented people, and offering a supportive, resource-based platform for developers, learners and enthusiasts, we believe it will inspire more creative use cases, and drive enterprise adoption of blockchain."
        button={{ btnColor: "#000", btnText: "Learn more about ZIP-11" }}
      />
      <ExchangeSupported />

      <Pricing />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

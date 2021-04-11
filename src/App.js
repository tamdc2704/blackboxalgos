import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Section from "./components/SectionTemplate1";
import SectionListItem from "./components/SectionListItem";
import Footer from "./components/Footer";
import "./App.css";
import Section2Img from "./components/Section2Img";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* SECTIONS */}

      {/* 1st section */}
      <div className="section1">
        <div className="circle">
          <div>
            <span>Automated Trading Platform</span>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="section2">
        <div className="animation-wrapper">
          <div className="text">
            At Zilliqa, we leverage on our silicon-smooth, speedy and
            cost-effective blockchain platform to catalyse and transform digital
            infrastructure across all global communities and industries.
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <SectionListItem />

      {/* 4th */}
      <Section
        className="section4 section"
        bgColor="#004068"
        color="#fff"
        imgSrc="https://zilliqa.dexecure.net/tild3437-3262-4462-b761-336566656439/webiste_stakingservi.png"
        title="Non-Custodial Staking with Zilliqa"
        button={{ btnColor: "#fff", btnText: "Stake Now" }}
        content="Competitive, lucrative staking offer set to drive more value and utility into Zilliqa's circular economy. And introducing the governance ZIL token (gZIL), that enables long-term token holders to play a part in the Zilliqa ecosystem."
      />

      {/* 5th */}
      <Section2Img />

      {/* 6th */}
      <Section
        className="section6 section"
        bgColor="#0c0e11"
        color="#fff"
        imgSrc="https://zilliqa.dexecure.net/tild3564-6438-4533-b432-316433366664/binnace-01.png"
        title="$ZIL Now Available on the Binance Widget!"
        button={{}}
        content="Buying $ZIL on Binance.com and Binance.US is now an even more user-friendly and seamless experience! With the integration of a $ZIL widget, Binance will be facilitating purchase and trading of $ZIL to users in over 170 countries.

        Depending on your location, sign up with either Binance.com or Binance.US to set up a custom buy, and benefit from your holdings.
        
        Purchase $ZIL and join the Widget Program now!"
      />

      {/* 7th */}
      <Section
        className="section7 section"
        bgColor="#fff"
        color="#000"
        imgSrc="https://zilliqa.dexecure.net/tild3663-6664-4163-b033-633663383039/Wallet-01.png"
        title="Where should you store $ZIL?"
        content="A crypto wallet is essentially software that stores public or private keys and engages with a particular blockchain platform to enable users to send, receive and trade cryptocurrency, and keep a close watch on their asset balances.

        Storing your $ZIL in wallets that are secure, user-friendly and accessible is of the utmost importance. Wallets come in several types such as hardware, software, desktop. Below, we share our recommendations for the top mobile wallets you can use"
        button={{ btnColor: "#29ccc4", btnText: "$ZIL Wallets" }}
      />

      {/* 8th */}
      <Section
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
        className="section9 section"
        bgColor="#ffc300"
        color="#000"
        imgSrc="https://zilliqa.dexecure.net/tild3864-6630-4230-b061-333339353635/zilliqa_website_zilh.gif"
        title="Learn, Build and Accelerate"
        content="ZILHive brings together all our ecosystem initiatives - our accelerator, grants and educational programmes. By opening our doors to talented people, and offering a supportive, resource-based platform for developers, learners and enthusiasts, we believe it will inspire more creative use cases, and drive enterprise adoption of blockchain."
        button={{ btnColor: "#000", btnText: "Learn more about ZIP-11" }}
      />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

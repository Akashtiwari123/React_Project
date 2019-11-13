import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header";
import Contacts from "./Contacts";
import MyInfo from "./MyInfo";
import Skills from "./Skills";
import SkillSet from "./SkillSet";

function App() {
  const skillComponent = Skills.map(sk => {
    return <SkillSet id={sk.id} skill={sk.skill} />;
  });

  return (
    <div>
      <Header />
      <Contacts
        name="Mr. Big Ears"
        imgURL="http://placekitten.com/100/200"
        phone=" (+91)9876543210"
        email="myemail@gmail.com"
      />
      {skillComponent}
      <Contacts
        name="Mr. Noddy"
        imgURL="http://placekitten.com/100/250"
        phone=" (+91)9876543210"
        email="noddy@gmail.com"
      />

      <Contacts
        name="Mr. Scooby"
        imgURL="http://placekitten.com/150/200"
        phone=" (+91)9876543210"
        email="scooby@gmail.com"
      />
      <Contacts
        name="Mr. Jerry"
        imgURL="http://placekitten.com/200/200"
        phone=" (+91)9876543210"
        email="Jerry@gmail.com"
      />

      <MainContent />
      <MyInfo />
      <Footer />
    </div>
  );
}

export default App;

/*
<Contacts>contact={{name:"Mr.Jerry",phone:"9876543210"}}</Contacts>
*/

import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header";
import ToDoItems from "./ToDoItems";
function App() {
  return (
    <div>
      <Header />
      <ToDoItems
        name="Mr. Big Ears"
        imgURL="url"
        phone=" (+91)9876543210"
        email="myemail@gmail.com"
      />
      <ToDoItems
        name="Mr. Noddy"
        imgURL="url"
        phone=" (+91)9876543210"
        email="noddy@gmail.com"
      />
      <ToDoItems
        name="Mr. Scooby"
        imgURL="url"
        phone=" (+91)9876543210"
        email="scooby@gmail.com"
      />
      <ToDoItems
        name="Mr. Jerry"
        imgURL="url"
        phone=" (+91)9876543210"
        email="Jerry@gmail.com"
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

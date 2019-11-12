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
      <ToDoItems /> <ToDoItems /> <ToDoItems />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

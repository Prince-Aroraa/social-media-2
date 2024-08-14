import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import PostListProvider from "./store/Post-List-Store";
import { useState } from "react";

function App() {
  const [newChange, setNewChange] = useState("Home");
  return (
    <PostListProvider>
      <div className="social-media">
        <Sidebar setNewChange={setNewChange} newChange={newChange}></Sidebar>
        <div className="content">
          <Header></Header>
          {newChange === "Home" ? <PostList /> : <CreatePost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;

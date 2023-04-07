import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListPosts from "./components/ListPosts";
import { Navbar } from "react-bootstrap";
import MyNavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ListPosts />
    </div>
  );
}

export default App;

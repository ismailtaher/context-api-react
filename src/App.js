import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="React JS Blog"></Header>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/post" element={<NewPost />}></Route>
          <Route path="/edit/:id" element={<EditPost />}></Route>
          <Route path="/post/:id" element={<PostPage />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<Missing></Missing>}></Route>
        </Routes>
        <Footer></Footer>
      </DataProvider>
    </div>
  );
}

export default App;

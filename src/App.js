import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );

  /**
   * This is going to be my component hierarchy
   *
   * App
   *  Header
   *  Body
   *    Sidebar
   *    MainContainer
   *      ButtonList
   *      VideoContainer
   *        VideoCard
   */
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
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

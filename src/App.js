import "./App.css";
import Header from "./common-comps/Header";
import CompHome from "./common-comps/CompHome";
import { Footer } from "./common-comps/Footer";
import HooksHome from "./hooks/HooksHome";
import ReduxHome from "./redux/ReduxHome";
import PropHome from "./props/PropHome";
import RoutingHome from "./routing/RoutingHome";
import AxiosHome from "./axios";
import Jsx from "./JSX/Jsx";
import ToolkitHome from "./redux_toolkit/ToolkitHome";
import DebugNums from "./debug/Debug";


function App() {
  return (
    <>
      <Header />
      <Jsx />
      <CompHome />
      <RoutingHome />
      <PropHome />
      <HooksHome />
      <DebugNums />
      <AxiosHome />
      <ReduxHome />
      <ToolkitHome />
      <Footer />
    </>
  );
}

export default App;

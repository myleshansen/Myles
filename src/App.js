import Intro from "./components/Intro";
import About from "./components/About";
import SidebarNav from "./components/SidebarNav";
import Experience from "./components/Experience";

import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Intro />
        <About />
        <Experience />
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;

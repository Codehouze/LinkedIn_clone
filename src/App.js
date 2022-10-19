import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Feed from "./Component/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* Sidebar */}
      {/* feed */}
      {/* widget */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { useEffect, useState } from "react";
import content from "./utils/content.json";

function App() {
  const [pageContent, setPageContent] = useState([]);

  const fetchContent = () => {
    setPageContent(content.pages);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="App">
      <RootLayout pageContent={pageContent} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./component/Header";
import ImageResult from "./component/ImageResult";

function App() {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <Header setListImages={setListImages} setIsLoading={setIsLoading} />
      <ImageResult listImages={listImages} isLoading={isLoading} />
    </div>
  );
}

export default App;

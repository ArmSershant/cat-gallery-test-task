import { useEffect, useRef, useState } from "react";
import axiosInstance from "./api/axiosInstance";
import CatImage from "./components/CatImage/CatImage";
import Controls from "./components/Controls/Controls";
import Header from "./components/Header/Header";

function App() {
  const [enabled, setEnabled] = useState(true);
  const [auto, setAuto] = useState(false);
  const [image, setImage] = useState("");
  const intervalRef = useRef(null);

  const getCat = () => {
    if (!enabled) return;
    axiosInstance
      .get("/images/search")
      .then((res) => setImage(res.data[0].url));
  };

  useEffect(() => {
    if (auto && enabled) {
      intervalRef.current = setInterval(getCat, 5000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [auto, enabled]);

  return (
    <div>
      <Header />
      <Controls
        enabled={enabled}
        setEnabled={setEnabled}
        auto={auto}
        setAuto={setAuto}
        getCat={getCat}
      />
      <CatImage src={image} />
    </div>
  );
}

export default App;

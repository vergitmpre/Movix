import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(function () {
    const apiTesting = async () => {
      const data = await fetchDataFromApi("/movie/popular");
      console.log(data);
    };

    apiTesting();
  }, []);

  return <div>App</div>;
}

export default App;

import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration, getUrl } from "./store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const url = useSelector(getUrl);

  useEffect(
    function () {
      const apiTesting = async () => {
        const data = await fetchDataFromApi("/movie/popular");
        dispatch(getApiConfiguration(data));
      };

      apiTesting();
    },
    [dispatch]
  );

  return <div>{url?.total_pages}</div>;
}

export default App;

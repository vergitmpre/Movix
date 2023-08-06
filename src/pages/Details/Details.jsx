import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";

function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  const trailers = data?.results?.filter((video) => video.type === "Trailer");

  return (
    <div>
      <DetailsBanner
        video={trailers?.length ? trailers[0] : data?.results?.[0]}
        crew={credits?.crew}
      />
    </div>
  );
}

export default Details;

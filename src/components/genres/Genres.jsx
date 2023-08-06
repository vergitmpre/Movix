import { useSelector } from "react-redux";
import "./style.scss";
import { getGenresData } from "../../store/homeSlice";

function Genres({ data }) {
  const genres = useSelector(getGenresData);

  return (
    <div className="genres">
      {data?.map((genre) => {
        if (!genres[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {genres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;

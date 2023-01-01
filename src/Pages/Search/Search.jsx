import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Searchbar from "../../Components/SearchBar";
import Video from "../../Components/Video";
import { YOUTUBE_DATA_URI } from "../../config/config";
const Search = () => {
  const [keyword, setSearchKey] = useState("solo dance");
  const [videos, setVideos] = useState([]);
  const setSearchKeyword = (key) => {
    setSearchKey(key);
    console.log(keyword);
  };

  const getVideosWithKeyword = async () => {
    const res = await axios.get(
      `${YOUTUBE_DATA_URI}key=${
        import.meta.env.VITE_APP_YOUTUBE_API_KEY
      }&part=snippet&type=video&maxResults=15&q=${keyword}`
    );
    setVideos(res.data.items);
    console.log(videos);
  };
  useEffect(() => {
    getVideosWithKeyword();
  }, [keyword]);

  return (
    <div
      className={`${styles["search-container"]} flex items-center justify-center`}
    >
      <div className="text-white backdrop-blur-sm bg-black/60 rounded-3xl p-10 text-center w-[70%] h-[90%] overflow-hidden">
        <p className="text-4xl mb-5 font-bold">Search</p>
        <Searchbar setSearchKeyword={setSearchKeyword} />
        <div
          className={`${styles["video-container"]} flex flex-col items-start mt-4 gap-3 overflow-scroll h-[80%] p-10 pt-0 pb-0 min-w-[400px]`}
        >
          {videos.map((video) => (
            <Video
              key={video.id.videoId}
              title={video.snippet.title}
              desc={video.snippet.description}
              thumbnail={video.snippet.thumbnails.default}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

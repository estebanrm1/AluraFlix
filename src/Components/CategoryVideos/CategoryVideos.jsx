import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();

  return (
    <div>
      {Object.keys(videoCategory).map((categoria) => (
        <div key={categoria}>
          <CategoryTitle>{categoria}</CategoryTitle>
          <VideoList>
            {videoCategory[categoria].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;

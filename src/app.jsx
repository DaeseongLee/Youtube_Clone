import React, { useEffect, useState, useCallback } from 'react';
import styles from './app.module.css';
import HeaderSearch from './components/search/headerSearch';
import VideoDetail from './components/video/videoDetail';
import VideoList from './components/video/videoList';
const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectVideo, selectedVideo] = useState(null);

  useEffect(() => {
    youtube.mostPopular().then(setVideos);
  }, [youtube]);

  const handleSearch = useCallback((value) => {
    selectedVideo(null);
    youtube.search(value).then(setVideos);
  }, [youtube]);

  const handleClickVideo = (video) => {
    selectedVideo(video);
  }
  return (
    <div className={styles.app}>
      <HeaderSearch onSearch={handleSearch} />
      <div className={styles.content}>
        {
          selectVideo && (
            <div className={styles.video}>
              <VideoDetail video={selectVideo} />
            </div>
          )

        }
        <div className={styles.list}>
          <VideoList videos={videos} onClickVideo={handleClickVideo} displayType={selectVideo ? 'list' : 'grid'} />
        </div>
      </div>
    </div>
  );
};

export default App;
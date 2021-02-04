import React from 'react';
import VideoItem from './videoItem';
import styles from './videoList.module.css';
const VideoList = ({ videos, onClickVideo, displayType }) => {
    return (
        <ul className={styles.videos}>
            {
                videos.map(video => <VideoItem key={video.id} video={video} onClickVideo={onClickVideo} displayType={displayType} />)
            }
        </ul>
    );
};

export default VideoList;
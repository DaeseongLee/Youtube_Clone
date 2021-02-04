import React, { memo } from 'react';
import styles from './videoItem.module.css';
const VideoItem = memo(({ video, video: { snippet: { title, channelTitle, thumbnails } }, onClickVideo, displayType }) => {
    const handleClickVideo = () => {
        onClickVideo(video);
    }
    const display = displayType === 'list' ? styles.list : styles.grid;
    console.log(display);
    return (
        <li className={`${styles.container} ${display}`} onClick={handleClickVideo}>
            <div className={styles.video}>
                <img src={thumbnails.medium.url} alt="thumbnail" className={styles.thumbnail} />
                <div className={styles.metadata}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.channelTitle}>{channelTitle}</p>
                </div>
            </div>
        </li>
    );
});

export default VideoItem;
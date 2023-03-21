import React from 'react';
import './Videos.css';
import videos from '../videos.json';

function Videos() {
    return (
        <div className="videos">
            <h1>Videos</h1>
            <div className="video-list">
                {videos.videos.map((video) => (
                    <div className="video" key={video.id}>
                        <iframe
                            title={video.title}
                            width="560"
                            height="315"
                            src={video.url}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Videos;

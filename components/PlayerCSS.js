import 'videojs-youtube'

const PlayerCSS = () => {
    return (
    <>
    <div data-vjs-player>
        <video
            id="my-video"
            className="video-js vjs-theme-city"
            playsInline
            controls
            preload="auto"
            data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://youtu.be/ujriV3vkC9w"}] }'
        ></video>
    </div>
</>
)
}

export default PlayerCSS

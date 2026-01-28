import React from 'react'
import Window from './Windows'

const Spotify = () => {
    return (
        <Window name="spotify">
            <div className="spotify-window h-full flex items-center justify-center p-4">
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </Window>
    )
}

export default Spotify
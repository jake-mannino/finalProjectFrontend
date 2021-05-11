import React from 'react'

export default function TrackPlayer() {
    return (
        <div>
        <script src="https://unpkg.com/wavesurfer.js"></script>
        <div id="waveform"></div>
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
});
        wavesurfer.load('audio.wav');
        </div>
    )
}

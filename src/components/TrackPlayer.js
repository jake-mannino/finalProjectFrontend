import React from 'react'
import WaveSurfer from "wavesurfer.js";

export default function TrackPlayer() {
const wavesurfer = useRef(null);
useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: waveform,
            waveColor: violet,
            progressColor: purple,
        wavesurfer.current.load(url),
        wavesurfer.current.on("ready", function() {
         // https://wavesurfer-js.org/docs/methods.html
        current.setVolume(0.5);
        current.play();  
        var Reso = wavesurfer.backend.ac.createBiquadFilter();
        wavesurfer.backend.setFilter(resonanceHelper);
}) 
})
})
}
    // wavesurfer.current = WaveSurfer.create(options);
    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
//     return () => wavesurfer.current.destroy();
//   }, [url]);

//   useEffect(() => {
//       ...
//   },[url]);

        // <div id="waveform">

        // </div>

        // WaveSurfer.create({ container: someDiv });

// const waveformRef = useRef(null);
// useEffect(() => {

//     WaveSurfer.create({ container: waveformRef.current
//     });
// }, []);
    // return <div ref={waveformRef}/>;
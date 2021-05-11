import React from 'react'
import WaveSurfer from "wavesurfer.js";


export default function TrackPlayer() {
WaveSurfer.create({ container: someDiv });

const waveformRef = useRef(null);
useEffect(() => {

    WaveSurfer.create({ container: waveformRef.current
    });
}, []);
    // return <div ref={waveformRef}/>;

const wavesurfer = useRef(null);
useEffect(() => {
    wavesurfer.current = WaveSurfer.create(options);

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  useEffect(() => {
      ...
  },[url]);

        <div id="waveform">

        </div>
        var wavesurfer = WaveSurfer.create({
            container: waveform,
            waveColor: violet,
            progressColor: purple,
});
        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function() {
         // https://wavesurfer-js.org/docs/methods.html
        wavesurfer.current.setVolume(0.5);
        wavesurfer.current.play();
});   
}

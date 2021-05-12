import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Resonance from "/Users/Mannino/Sites2/finalProjectFrontend/node_modules/resonance-audio/build/resonance-audio";
import resonanceHelper from "../utilities/resonanceHelper";


const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
});
export default function TrackPlayer(props) {
  const { url } = props;
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);
      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });
    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);
  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };
  const onVolumeChange = (e) => {
    const { target } = e;
    const newVolume = +target.value;
    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };
  // resonanceHelper(){
  // const onX0change = (e) => {
  //   const { target } = e;
  //   const newX0 = +target.value;
  //     if (newX0){
  //       setX0(newX0);
  //       wavesurfer.current.setX0(newXO || 1);
  //     })
  //   this.AudioFile.source.setPosition.x = X0;
  //   this.AudioFile.source.setPosition.y = Y0;
  //   this.AudioFile.source.setPosition.z = Z0;
  // }





  //     useEffect(() => {
  //     const wavesurfer = WaveSurfer.create({
  //       container: waveformRef.current,
  //       waveColor: violet,
  //       progressColor: purple,
  //     });
  //     wavesurfer.current.load(url),
  //       wavesurfer.current.on("ready", function () {
  //         // https://wavesurfer-js.org/docs/methods.html
  //         current.setVolume(0.5);
  //         current.play();
  //         var lowpass = wavesurfer.backend.ac.createBiquadFilter();
  //         wavesurfer.backend.setFilter(lowpass);
  //       });
  //   }, []);

  //     wavesurfer.current = WaveSurfer.create(options);
  //     // Removes events, elements and disconnects Web Audio nodes.
  //     // when component unmount
  //     return () => wavesurfer.current.destroy();
  //   }, [url]);

  //   useEffect(() => {
  //       ...
  //   },[url]);

  //         <div id="waveform">

  //         </div>

  //         WaveSurfer.create({ container: someDiv });

  // const waveformRef = useRef(null);
  // useEffect(() => {

  //     WaveSurfer.create({ container: waveformRef.current
  //     });
  // }, []);
  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
        <input
          type="range"
          id="volume"
          name="volume"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
        {/* <input
          type="range"
          id="x0"
          name="x0"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          onChange={onX0change}
          defaultValue={onX0init}
        /> */}
        <div>
        <label htmlFor="user-x">Listener Horizontal</label>
        </div>
        <div>
        <label htmlFor="user-y">Listener Vertical</label>
        </div>
        <div>
        <label htmlFor="user-z">Listener Z-Depth</label>
        </div>
      </div>
    </div>
  );
}

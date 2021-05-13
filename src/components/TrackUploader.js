import React, { useState } from "react";
import axios from "axios";
import TrackValidation from "../utilities/TrackValidation";
import useForm from "../utilities/useForm";

export default function TrackUploader(props) {
  const trackUploader = (values) => {
    console.log(values);
    const apiUrl = "https://loudfog-yomannino549969.codeanyapp.com/api/";
    axios
      .post(apiUrl, values,)
      .then((response) => {
        console.log(response);
        //save token
        //validform
        //useAuth custom hook
        //registration validation
        //useHistory push to Dashboard
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  const { values, handleChange, handleSubmit, errors } = useForm(
    trackUploader,
    TrackValidation
  );
  console.log(values, errors);
  return (
    <div>
      <div>
        <input
          name="track-title"
          className="justify-self-center align-items-center text-center"
        ></input>
      </div>
      <div>
        <div className="mb-3 justify-self-center align-items-center text-center font-weight-bolder">
          <div className="upload-title">
            <h2>Upload Track</h2>
          </div>
          <input
            name="Track"
            type="file"
            placeholder="fog.wav"
            className={`form-control font-weight-bolder ${
              values.track && "is-valid"
            } ${!!errors.track && "is-invalid"}`}
            aria-label="file example"
            value={values.track || ""}
            onChange={handleChange}
            required
          />
          {errors.track && <p className="help is-danger">{errors.track}</p>}
          <div className="invalid-feedback font-weight-bolder text-center">
            Example invalid form file feedback
          </div>
        </div>
        <button className="Upload Button">Upload</button>
      </div>
    </div>
  );
}

// function TestComp() {
//   return <div>test</div>;
// }

// // export default TrackUploader
// export default TestComp;

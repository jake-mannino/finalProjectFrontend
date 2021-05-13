import React, { useState } from "react";
// import Logo from './logo.png'
import axios from "axios";
import "../App.scss";
import registrationValidation from "../utilities/RegisterValidation";
import useForm from "../utilities/useForm";
import { useAuth } from "../utilities/AuthContext";
import { Redirect, useHistory } from "react-router-dom";

export default function Auth(props) {
    const { saveToken, token } = useAuth();
    const history = useHistory();
    const auth = (values) => {
    // const handleChange = (e) => {
    //   setFormData((previousState) => {
    //     const value =
    //       e.target.type === "checkbox" ? e.target.checked : e.target.value;

    //     return {
    //       ...previousState,
    //       [e.target.name]: value,
    //     };
    //   });
    // };
    // const handleSub = (e) => {
    //   e.preventDefault();

    // formData.client_id = "935a33bf-c9ec-429d-bd5c-7bf33d7820c6";
    // formData.client_secret = "IyXR49SspIY1pt4n8BU55oq4ULv7iDkSr5CBDrFn";
    // formData.grant_type = "password";
    // formData.scope = "";
    // formData.username = formData.email;

    const apiUrl = "https://loudfog-yomannino549969.codeanyapp.com/oauth/token";
    axios
      .post(apiUrl, values)
      .then((response) => {
        console.log(response);
        saveToken(response);
        history.push("/home");
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
    auth,
    registrationValidation
  );
  console.log(values);
  //setup form validation
  //set
  return (
    //link to register in nav/ below header
    <div className="tornado">
    {!token.length > 0? 
      <main>
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col d-block justify-self-center align-items-center text-center">
            <label
              for="validationServer02"
              class="form-label text-white"
              value={values.email|| ""}
            >
              <h3>Email</h3>
            </label>
            <input
              name="email"
              type="email"
              placeholder="CornDogCyclone@BahamaIceSculpterGuild.gov"
              class={`form-control font-weight-bolder ${
                values.email && "is-valid"
              } ${!!errors.email && "is-invalid"}`}
              id="validationServer02"
              onChange={handleChange}
              required
            />
            <div class="valid-feedback">
              <h4>bet</h4>
            </div>
          </div>
          <div>
            <div class="col d-block justify-self-center text-center align-items-center">
              <label
                for="validationServerUserPassword"
                class="form-label text-white"
                value={values.password || ""}
              >
                <h3>Password</h3>
              </label>
              <div class="input-group has-validation justify-self-center text-center align-items-center">
                <input
                  name="password"
                  type="text"
                  className={`form-control ${values.password && "is-valid"} ${
                    !!errors.password && "is-invalid"
                  }`}
                  id="validationServerUserPassword"
                  placeholder="we've already sold your user data and password just fyi"
                  aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback"
                  onChange={handleChange}
                  required
                />
                <div
                  id="validationServerUserPasswordFeedback"
                  class="invalid-feedback font-weight-bolder text-light"
                >
                  <h4>
                    Enter valid password. This computer will self-destruct upon
                    invalid entry. 8 characters. One typo = One life.
                  </h4>
                </div>
              </div>
              <div class="col-12 d-block justify-self-center text-center align-items-center">
                <button class="btn btn-primary" type="submit">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      :
<Redirect to="/home"/>
    }
    </div>
  );
}

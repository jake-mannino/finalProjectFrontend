import React, { useState } from "react";
// import Logo from './logo.png'
import axios from "axios";
import '../App.scss'

export default function Auth(props) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((previousState) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;

      return {
        ...previousState,
        [e.target.name]: value,
      };
    });
  };
  const handleSub = (e) => {
    e.preventDefault();
    formData.client_id = "935a33bf-c9ec-429d-bd5c-7bf33d7820c6";
    formData.client_secret = "IyXR49SspIY1pt4n8BU55oq4ULv7iDkSr5CBDrFn";
    formData.grant_type = "password";
    formData.scope = "";
    formData.username = formData.email;

    const apiUrl = "https://loudfog-yomannino549969.codeanyapp.com/oauth/token";
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response);
        //save token
        //validform
        //useAuth custom hook
        //registration validation
        //useHistory push to Dashboard
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(formData);
  //setup form validation
  //set
  return (
    //link to register in nav/ below header
    <div className="tornado">
      <main>
        <form class="row g-3" onSubmit={handleSub}>
          <div class="col d-block justify-self-center align-items-center text-center">
            <label for="validationServer02" class="form-label text-white" value={formData.username || ""}>
            <h3>
              Email
              </h3>
            </label>
            <input
              name="email"
              type="email"
              placeholder="CornDogCyclone@BahamaIceSculpterGuild.gov"
              class={`form-control font-weight-bolder ${values.email && 'is-valid'} ${!!errors.email && 'is-invalid'}`}
              id="validationServer02"    
              onChange={handleChange}          
              required
            />
            <div class="valid-feedback"><h4>bet</h4></div>
          </div>
          <div>
          <div class="col d-block">
            <label for="validationServerUserPassword" class="form-label text-white" value={formData.password || ""}>
            <h3>
              Password
            </h3>
            </label>
            <div class="input-group has-validation">
              <input
                name="password"
                type="text"
                className={`form-control ${values.password && 'is-valid'} ${!!errors.password && 'is-invalid'}`}
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
               <h4>Enter valid password. This computer will self-destruct upon invalid entry. 8 characters. One typo = One life.</h4>
              </div>
              </div>
              <div class="col-12 d-block">
              <button class="btn btn-primary" type="submit">
                Enter
              </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

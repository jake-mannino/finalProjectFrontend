import React, { useState } from 'react'
// import Logo from './logo.png'
import axios from 'axios';

export default function Auth(props) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      setFormData((previousState) => {
          const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  
        return {
          ...previousState,
          [e.target.name]: value,
        };
      });
    };
    const handleSub = (e) => {
      e.preventDefault();
      const apiUrl =
        "https://loudfog-yomannino549969.codeanyapp.com/api/register";
      axios
        .get(apiUrl, formData)
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
     <div>
        <main>
            <form class="row g-3">
            <div class="col-md-4">
              <label for="validationServer02" class="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                class="form-control is-valid"
                id="validationServer02"
                value={formData.email || ""}
                required
              />
              <div class="valid-feedback">bet</div>
            </div>
                </div>
                <div class="col-md-4">
              <label for="validationServerUserPassword" class="form-label">
                Password
              </label>
              <div class="input-group has-validation">
                <input
                  name="password"
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUserPassword"
                  placeholder="password"
                  aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback"
                  value={formData.password || ""}
                  required
                />
                <div
                  id="validationServerUserPasswordFeedback"
                  class="invalid-feedback">
                  enter valid password. Must be atleast 8 characters.
                </div>
                    </div>
                </div>
            </form>
            </main>
  </div>
    );
}
import React, { useState } from "react";
// import Auth from 'Auth.js';
import axios from "axios";
import { render } from "react-dom";

export default function Register(props) {
  const [formData, setFormData,] = useState({});

  const handleChange = (e) => {
    setFormData((previousState) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      return {
        ...previousState,
        [e.target.name]: value,
      };
    });
  // formData {
  //   name:
  //   email:
  //   username:
  //   terms:
  //   profPic:
  //   coverPic:
  //   clan:
  // }
  //  formData.this.props?!isValid&&!null: render(
  //    formData.this.props.invalidFeedback)
  //    ||formData.this.props?isValid: render(
  //     formData.this.props.validFeeback)
   }
  const handleSub = (e) => {
    e.preventDefault();
    const apiUrl =
      "https://loudfog-yomannino549969.codeanyapp.com/api/register";
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
  //setup error handling from API
  return (
    //link to login.js in nav /below heade
    <div className="polaroidPicture">
      <main>
        <div>
          <form className="row g-3" onSubmit={handleSub}>
            <div className="col-md-4 justify-self-center text-center align-items-center">
              <label
                for="validationServer01"
                className="form-label font-weight-bolder justify-self-center text-center align-items-center"
              >
                <div className="justify-self-center text-center align-items-center">
                  <h3 className="text-light font-weight-bolder justify-self-center text-center align-items-center">
                    Name (First + Last)
                  </h3>
                </div>
              </label>
              <input
                name="name"
                type="text"
                className="form-control is-valid"
                id="validationServer01"
                placeholder="firstname lastname"
                value={formData.name || ""}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback text-light bg-dark text-center">
                ok cool
              </div>
            </div>
            <div className="col-md-4 text-info font-weight-bolder justify-self-center text-center align-items-center">
              <label
                for="validationServer02"
                className="form-label font-weight-bolder"
              >
                <h3 className="text-light font-weight-bolder justify-self-center text-center align-items-center">
                  Email
                </h3>
              </label>
              <input
                name="email"
                type="email"
                className="form-control is-valid text-info font-weight-bolder justify-self-center text-center align-items-center"
                id="validationServer02"
                value={formData.email || ""}
                onChange={handleChange}
                required
              />
              <div className="valid-feedback font-weight-bolder text-light bg-dark text-center">
                bet
              </div>
            </div>
            <div className="col-md-4 text-light font-weight-bolder justify-self-center text-center align-items-center">
              <label
                for="validationServerUsername"
                className="form-label font-weight-bolder justify-self-center text-center align-items-center"
              >
                <h3 className="text-light font-weight-bolder justify-self-center text-center align-items-center">
                  Username
                </h3>
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text font-weight-bolder"
                  id="inputGroupPrepend3"
                  >
                </span>
                <input
                  name="username"
                  type="text"
                  className="form-control is-invalid justify-self-center align-items-center text-center"
                  id="validationServerUsername"
                  value={formData.username || ""}
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  onChange={handleChange}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback text-light bg-dark text-center"
                >
                  username must start with one of the following: OG, O.G., drPhill, Dr. Phill, DrPhill, lil, bigHomie, BigHomie, yung, Yung, Dr, Dr., dr, Professor, professor, Sir, sir, Lord, lord, Shrek, shrek, getOuttaMySwamp.
                </div>
              </div>
            </div>
            <div className="container justify-self-center text-center align-items-center">
              <div className="row justify-self-center text-center align-items-center">
                <div className="col justify-self-center text-center align-items-center">
                  <div className="form-check justify-self-center text-center align-items-center">
                    <input
                      name="terms"
                      className="card form-check-input is-invalid justify-self-center align-items-center text-center"
                      type="checkbox"
                      value={formData.terms || ""}
                      id="invalidCheck3"
                      aria-describedby="invalidCheck3Feedback"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="form-check-label font-weight-bolder justify-self-center align-items-center text-center"
                      for="invalidCheck3"
                    >
                      <div>
                        <h4>Agree to terms and conditions</h4>
                      </div>
                    </label>
                    <div
                      id="invalidCheck3Feedback"
                      className="invalid-feedback font-weight-bolder justify-self-center align-items-center text-light text-center"
                    >
                      <h5>You must agree before submitting.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-block justify-self-center align-items-center text-center">
              <label
                for="validationServerUserPassword"
                className="form-label justify-self-center align-items-center text-light text-center font-weight-bolder"
              >
                <h3>Password</h3>
              </label>
              <div className="input-group has-validation">
                <input
                  name="password"
                  type="text"
                  className="form-control is-invalid"
                  id="validationServerUserPassword"
                  placeholder="password"
                  aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback"
                  value={formData.password || ""}
                  onChange={handleChange}
                  required
                />
                <div
                  id="validationServerUserPasswordFeedback"
                  className="invalid-feedback font-weight-bolder text-light bg-dark text-center"
                >
                  enter valid password. Must be atleast 8 characters.
                </div>
              </div>
            </div>
            <div className="mb-3 justify-self-center align-items-center text-center font-weight-bolder">
              <span className="font-weight-bolder text-white text-center">
                <h2>Upload Profile Picture</h2>
              </span>
              <input
                name="profPic"
                type="file"
                className="form-control font-weight-bolder"
                aria-label="file example"
                value={formData.profPic || ""}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback font-weight-bolder text-center">
                Example invalid form file feedback
              </div>
            </div>
            <div className="mb-3 justify-self-center align-items-center text-center font-weight-bolder">
              <span className="font-weight-bolder text-white text-center">
                <h2>Upload Cover Photo</h2>
              </span>
              <input
                name="coverPic"
                type="file"
                className="form-control font-weight-bolder"
                aria-label="file example"
                value={formData.coverPic || ""}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback font-weight-bolder text-center">
                Example invalid form file feedback
              </div>
            </div>
            <label className="text-light text-center">
              <div className="justify-self-center align-items-center text-center font-weight-bolder">
                <h2>Pick your clan:</h2>
              </div>
              <select name="clan" value={formData.clan} onChange={handleChange}>
                <option value="DR">DrPhilInc</option>
                <option value="Sensi">KneelTheGrassTysonsLLC</option>
                <option value="Sir">ShrekSquad</option>
                <option value="Yeezy">FakeYeezyGang</option>
                <option value="Proffessor">
                  ProffessorPBHoleNinjaMafiaRepostCartel
                </option>
                <option value="Big">EastSeasmeStElmoHittas</option>
                <option value="lord">LordFarsquaad</option>
                <option value="Bhad">BhadBarbies</option>
                <option value="OG">ChurchOfDannyDevito</option>
                <option value="lilhomie">RichHomieQuans</option>
                <option value="thicc">ThiccMrKrabs</option>
                <option value="BrocclisMaior">BroccoliPosse</option>
                <option value="OGTater">PotatoHeads</option>
                <option value="O_______O">IceAgeSidDynasty</option>
                <option value="{">LebronHairline</option>
                <option value="Sampler">AllTheCosctoSamples</option>
                <option value="TearsAreFuel">
                  RoombasCodedwithHumanEmotionsAndDesires
                </option>
              </select>
            </label>
            <div class="col-12 justify-self-center text-center align-items-center">
              <button
                className="btn btn-primary font-weight-bolder"
                type="submit"
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
  {
    /* 
for backend server side: 

$form-feedback-margin-top:          $form-text-margin-top;
$form-feedback-font-size:           $form-text-font-size;
$form-feedback-font-style:          $form-text-font-style;
$form-feedback-valid-color:         $success;
$form-feedback-invalid-color:       $danger;

$form-feedback-icon-valid-color:    $form-feedback-valid-color;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>");
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>"); */
  }
}

{
  /* //import nav, // link to login.js
    //anonymous version for unlogged / unregisters users,
    // just "login" on nav, if clicked links to login page, this nav button switches to sign on login.js
// pick clan <select>
                <option value="DR">DrPhilInc</option>
                <option value="Sensi">KneelTheGrassTysonLLC</option>
                <option value="Sir">ShrekSquad</option>
                <option value="Yeezy">FakeYeezyGang</option>
                <option value="Proffesor">ProffessorPBHoleNinjaMafiaRepostCartel</option>
                <option value="Big">EastSeasmeStElmoHittas</option>
                <option value="lord">LordFarsquaad</option>
                <option value="Bhad">BhadBarbies</option>
                <option value="OG">ChurchOfDannyDevito</option>
                <option value="lilhomie">RichHomieQuans</option>
                <option value="thicc">ThiccMrKrabs</option>
                <option value="BrocclisMaior">BroccoliPosse</option>
                <option value="OGTater">PotatoHeads</option>
                <option value="O_______O"> IceAgeSidDynasty</option>
                <option value="{CrookedCurlybraks}">LebronHairline</option>
                <option value="Sampler">AllTheCosctoSamples</option>
                <option value="TearsAreFuel">RoombasCodedwithHumanEmotionsAndDesires</option>
            </select>
            value of selected option is used as a prefix title to your username indicating your clan
//body
    //container
            //div
                //row
                    //col
                        //card
                            //subheader or h1
                                // input fields with :valid classes if valid, linked to serve for validation
                                    //email
                                    //password


//export

//https://getbootstrap.com/docs/5.0/forms/validation/
//
// import Logo from './logo.png';
 */
}

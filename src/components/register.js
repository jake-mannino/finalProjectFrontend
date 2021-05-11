import React, { useState } from "react";
// import Auth from 'Auth.js';
import axios from "axios";
import { render } from "react-dom";
import registrationValidation from '../utilities/RegisterValidation';
import useForm from "../utilities/useForm";


export default function Register(props) {
  const register = (values) => {
    const apiUrl =
      "https://loudfog-yomannino549969.codeanyapp.com/register";
    axios
      .post(apiUrl, values)
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
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
   } = useForm(register, registrationValidation);
  // values {
  //   name:
  //   email:
  //   username:
  //   terms:
  //   profPic:
  //   coverPic:
  //   clan:
  // }
  //  values.this.props?!isValid&&!null: render(
  //    values.this.props.invalidFeedback)
  //    ||values.this.props?isValid: render(
  //     values.this.props.validFeeback)
 

console.log(values);
  //setup form validation
  //setup error handling from API
  return (
    //link to login.js in nav /below heade
    <div className="polaroidPicture">
      <main>
        <div>
          <form className="row g-3" onSubmit={handleSubmit}>
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
                className="form-control "{...`input ${errors.name && 'is-danger'}`}
                id="validationServer01"
                placeholder="firstname lastname"
                value={values.name || ""}
                onChange={handleChange}
                required
              />
                 {errors.name && (
                <p className="help is-danger">{errors.name}</p>
              )}
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
                className="form-control text-info font-weight-bolder justify-self-center text-center align-items-center" {...`input ${errors.email && 'is-danger'}`}
                id="validationServer02"
                value={values.email || ""}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
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
                  className="form-control is-invalid justify-self-center align-items-center text-center" {...`input ${errors.username && 'is-danger'}`}
                  id="validationServerUsername"
                  value={values.username || ""}
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  onChange={handleChange}
                  required
                />
                      {errors.username && (
                <p className="help is-danger">{errors.username}</p>
              )}
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
                      classNameName="card form-check-input justify-self-center align-items-center text-center" {...`input ${errors.terms && 'is-danger'}`}
                      type="checkbox"
                      value={values.terms || ""}
                      id="invalidCheck3"
                      aria-describedby="invalidCheck3Feedback"
                      onChange={handleChange}
                      required
                    />
                    {errors.terms && (
                <p className="help is-danger">{errors.terms}</p>
              )}
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
                  className="form-control is-invalid"{...`input ${errors.password && 'is-danger'}`}
                  id="validationServerUserPassword"
                  placeholder="password"
                  aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback"
                  value={values.password || ""}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}
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
                className="form-control font-weight-bolder"{...`input ${errors.profPic && 'is-danger'}`}
                aria-label="file example"
                value={values.profPic || ""}
                onChange={handleChange}
                required
              />
              {errors.profPic && (
                <p className="help is-danger">{errors.profPic}</p>
              )}
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
                className="form-control font-weight-bolder" {...`input ${errors.coverPic && 'is-danger'}`}
                aria-label="file example"
                value={values.coverPic || ""}
                onChange={handleChange}
                required
              />
              {errors.coverPic && (
                <p className="help is-danger">{errors.coverPic}</p>
              )}
              <div className="invalid-feedback font-weight-bolder text-center">
                Example invalid form file feedback
              </div>
            </div>
            <label className="text-light text-center">
              <div className="justify-self-center align-items-center text-center font-weight-bolder">
                <h2>Pick your clan:</h2>
              </div>
              <select name="clan" value={values.clan} onChange={handleChange}>
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
            {errors.clan && (
                <p className="help is-danger">{errors.clan}</p>
              )}
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

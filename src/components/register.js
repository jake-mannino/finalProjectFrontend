
import React { useState } from 'react';
// import Auth from 'Auth.js';
//will add css below near bottom to it's own  css sheet or within a tag

export default function Register(props) {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(previousState=> ( 
            {
                ...previousState, 
                [e.target.name] : e.target.value
            }
        ))
    }
 console.log(formData)

    return (
        //link to login.js in nav /below heade
<div>
    <main>
        <div>
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">Name (First + Last)</label>
                    <input type="text" class="form-control is-valid" id="validationServer01" placeholder="firstname lastname" value={formData.name || ''} onChange={handleChange} required/>
                    <div class="valid-feedback">
                        ok cool
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServer02" class="form-label">Email</label>
                    <input name="email" type="email" class="form-control is-valid" id="validationServer02" value={formData.email || ''} required/>
                    <div class="valid-feedback">
                        bet
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" class="form-control is-invalid" id="validationServerUsername" value={formData.username || ''} aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        choose a username
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
                    <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                    </label>
                    <div id="invalidCheck3Feedback" class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                <label for="validationServerUserPassword" class="form-label">Password</label>
                    <div class="input-group has-validation">
                    <input type="text" class="form-control is-invalid" id="validationServerUserPassword" placeholder="password" aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback" value={formData.name || ''} required/>
                    <div id="validationServerUserPasswordFeedback" class="invalid-feedback">
                        enter valid password. Must be atleast 8 characters.
                    </div>
                    </div>
                </div>
                <div class="mb-3">
                    <span>Upload Profile Picture</span>
                    <input type="file" class="form-control" aria-label="file example" value={formData.profPic|| ''} required/>
                    <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div class="mb-3">
                    <span>Upload Cover Photo</span>
                    <input type="file" class="form-control" aria-label="file example" value={formData.coverPic|| ''} required/>
                    <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <label>
            Pick your clan:
                <select>
                    <option value="DR">DrPhilInc</option>
                    <option value="Sensi">KneelTheGrassTysonsLLC</option>
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
                    <option value="O_______O">IceAgeSidDynasty</option>
                    <option value="{">LebronHairline</option>
                    <option value="Sampler">AllTheCosctoSamples</option>
                    <option value="TearsAreFuel">RoombasCodedwithHumanEmotionsAndDesires</option>
                </select>
            </label>
                <input type="submit" value="Submit"/>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    </main>
</div>
    );
{/* 
for backend server side: 

$form-feedback-margin-top:          $form-text-margin-top;
$form-feedback-font-size:           $form-text-font-size;
$form-feedback-font-style:          $form-text-font-style;
$form-feedback-valid-color:         $success;
$form-feedback-invalid-color:       $danger;

$form-feedback-icon-valid-color:    $form-feedback-valid-color;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>");
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>"); */}
}







{/* //import nav, // link to login.js
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
 */}

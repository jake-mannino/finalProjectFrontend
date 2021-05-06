
import React from 'react';
import Register from 'Register.js';
// import Auth from 'Auth.js';
//will add css below near bottom to it's own  css sheet or within a tag

export default function Register(props) {

    render (
        
        //link to login.js in nav /below header
        <div>
<main>
    <div>
        <form class="row g-3">
            <div class="col-md-4">
                <label for="validationServer01" class="form-label">Name (First + Last)</label>
                <input type="text" class="form-control is-valid" id="validationServer01" value="First Name + Last Name" required>
                <div class="valid-feedback">
                    ok cool
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServer02" class="form-label">Email</label>
                <input name="email" type="email" class="form-control is-valid" id="validationServer02" value="Email" required>
                <div class="valid-feedback">
                    bet
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServerUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    choose a username
                </div>
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationServer03" class="form-label">City</label>
                <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationServer04" class="form-label">State</label>
                <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
                </select>
                <div id="validationServer04Feedback" class="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationServer05" class="form-label">Zip</label>
                <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required>
                <div id="validationServer05Feedback" class="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required>
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
                <input type="text" class="form-control is-invalid" id="validationServerUserPassword" aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback" required>
                <div id="validationServerUserPasswordFeedback" class="invalid-feedback">
                    enter valid password. Must be atleast 8 characters.
                </div>
                </div>
            </div>
            <div class="mb-3">
                <span>Upload Profile Picture</span>
                <input type="file" class="form-control" aria-label="file example" required>
                <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>
            <div class="mb-3">
                <span>Upload Cover Photo</span>
                <input type="file" class="form-control" aria-label="file example" required>
                <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>
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

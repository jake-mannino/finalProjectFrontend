        
        //import nav, // link to register.js
                // anonymous version for unlogged / unregisters users 
                // just "sign -up" on nav, if clicked links to sign up page, 
                // nav button switches to login on register.js
//body
    //container
            //div
                //row
                    //col
                        //card
                            //subheader or h1
                                //two input fields with :valid classes if valid
                                    //email
                                    //password
        // <div> row
        //     <div> col
        //         <form>
        //             <div>
        //                 <img/> ?
        //                 <h1><h1/>
        //                     <input/>
        //                     <label/>
        //             <div>
        //         <form/>
        //     <div/>
        // <div/>
        //link to register.js
import React from 'react'
import Logo from './logo.png'


export default function Login (props) {
    render (
        //link to register in nav/ below header
        <form class="row g-3">
            <div class="col-md-4">
                <label for="validationServer02" class="form-label">Email</label>
                <input type="text" class="form-control is-valid" id="validationServer02" value="Email" required>
                <div class="valid-feedback">
                    bet
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServerUserPassword" class="form-label">Password</label>
                <div class="input-group has-validation">
                <input type="text" class="form-control is-invalid" id="validationServerUserPassword" aria-describedby="inputGroupPrepend3 validationServerPasswordFeedback" required>
                <div id="validationServerUserPasswordFeedback" class="invalid-feedback">
                    wrong password. try again
                </div>
                </div>
            </div>
        </form>
    );
}
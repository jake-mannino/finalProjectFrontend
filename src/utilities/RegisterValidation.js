import React from 'react'

export default function registrationValidation(values){
    let errors = {};
    //name

    if(!values.name){ 
        errors.name = 'name???????';
    }

    //email
    if(!values.email){
        errors.email = 'email????????';
    } else if(!/\S+@\S+\.\S/.test(values.email)){
        errors.email = 'enter a real email to avoid being deleted from reality';
    }
    //username
    if(!values.username){
        errors.username = 'username????????';
    }
    //password
    if(!values.password){
        errors.password = 'password??????';
    } else if(values.password.length < 7) {
        errors.password = 'not long enough, must be 8 or more characters';
    }
    //terms
    if(!values.terms){
        errors.terms = 'agree if you cherish life';
    }
    //profPic
    if(!values.profPic){
        errors.profPic = 'upload profile picture or else';
    }
    //coverPic
    if(!values.coverPic){
        errors.coverPic = 'upload cover photo or else';
    }
    //clan
    if(!values.clan){
        errors.clan = 'pick clan or else';

    }
    return errors;

}
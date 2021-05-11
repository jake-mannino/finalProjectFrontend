import React from 'react'

export default function registrationValidation(values){
    let errors = {};
    //name
    if(!values.name){ 
        errors.name = 'name???????';
    }
    //email
    if(!values.email){
        errors.email = 'email????';
    } else if(!/\S+@\S+\.\S/.test(values.email)){
        errors.email = 'enter a real email to avoid being deleted from reality';
    }
    //username
    if(!values.username){
        errors.username = 'username????';
     }  else if(values.username.startsWith("OG" || "O.G."||
        "drPhill"|| "Dr. Phill"|| "DrPhill"|| "lil"|| "bigHomie"||
        "BigHomie"|| "yung"|| "Yung"|| "Dr"|| "DrPepper"|| "dr"||
        "Professor"|| "professor"|| "Sir"|| "sir"|| "Lord"|| "lord"||
        "Shrek"|| "shrek"|| "getOuttaMySwamp")== false){
            errors.username ='Username MUST start with one of the following: "OG", "O.G.",
            "drPhill", "Dr. Phill", "DrPhill", "lil", "bigHomie",
            "BigHomie", "yung", "Yung", "Dr", "DrPepper", "dr",
            "Professor", "professor", "Sir", "sir", "Lord", "lord",
            "Shrek", "shrek", "getOuttaMySwamp".';
        }
    }
    //password
    if(!values.password){
        errors.password = 'password????';
    } else if(values.password.length < 7) {
        errors.password = 'not long enough, water and nourish your password so it may grow to 8 or more characters';
    }
    //terms
    if(!values.terms){
        errors.terms = 'basically we own you and will def sell your data to third-partys and foreign govs,you the user are the product here, you pay us in personal data';
    }
    //profPic
    if(!values.profPic){
        errors.profPic = 'upload profile picture';
    }
    //coverPic
    if(!values.coverPic){
        errors.coverPic = 'upload cover photo before it uploads you';
    }
    //clan
    if(!values.clan){
        errors.clan = 'pick a clan for protection';

    }
    return errors;

}
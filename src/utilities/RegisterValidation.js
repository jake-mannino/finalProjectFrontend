import React from "react";

export default function registrationValidation(values) {
  let errors = {};
  //name
  if (!values.name) {
    errors.name = "name???????";
  }
  //email
  if (!values.email) {
    errors.email = "email????";
  } else if (!/\S+@\S+\.\S/.test(values.email)) {
    errors.email = "enter a real email to avoid being deleted from reality";
  }
  //username
  if (!values.username) {
    errors.username = "username????";
  }
  if (
    (values.username.startsWith("OG") ||
      values.username.startsWith("O.G.") ||
      values.username.startsWith("drPhill") ||
      values.username.startsWith("DrPhill") ||
      values.username.startsWith("lil") ||
      values.username.startsWith("bigHomie") ||
      values.username.startsWith("BigHomie") ||
      values.username.startsWith("yung") ||
      values.username.startsWith("Yung") ||
      values.username.startsWith("Dr") ||
      values.username.startsWith("DrPepper") ||
      values.username.startsWith("dr") ||
      values.username.startsWith("Professor") ||
      values.username.startsWith("professor") ||
      values.username.startsWith("Sir") ||
      values.username.startsWith("sir") ||
      values.username.startsWith("Lord") ||
      values.username.startsWith("lord") ||
      values.username.startsWith("Shrek") ||
      values.username.startsWith("shrek") ||
      values.username.startsWith("getOuttaMySwamp")) == false
  ) {
    errors.username = `Username MUST start with one of the following: "OG", "O.G.",
             "drPhill", "Dr. Phill", "DrPhill", "lil", "bigHomie",
             "BigHomie", "yung", "Yung", "Dr", "DrPepper", "dr",
             "Professor", "professor", "Sir", "sir", "Lord", "lord",
             "Shrek", "shrek", "getOuttaMySwamp".`;
  }

  //password
  if (!values.password) {
    errors.password = "password????";
  } else if (values.password.length < 7) {
    errors.password = "no. 8 or more characters";
  }
  //terms
  if (!values.terms) {
    errors.terms =
      "basically we own you and will def sell your data to third-partys and foreign govs,you the user are the product here, you pay us in personal data";
  }
  //profPic
  if (!values.profPic) {
    errors.profPic = "upload profile picture";
  }
  //coverPic
  if (!values.coverPic) {
    errors.coverPic = "upload cover photo before it uploads you";
  }
  //clan
  if (!values.clan) {
    errors.clan = "pick a clan for protection";
  }
  return errors;
}

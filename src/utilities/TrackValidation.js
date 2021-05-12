import React from 'react'

export default function TrackValidation(values) {
    let errors = {}
    if (!values.track) {
        errors.track = "File Upload Error! :(";
      }
    return errors;
}

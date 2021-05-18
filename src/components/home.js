import React from "react";
import { Redirect } from "react-router-dom";
import Navi from "./Navi";
import TrackUploader from "./TrackUploader";
import axios from "axios";
import axiosHelperDefaultValues from "../utilities/axiosHelper";
import TrackPlayer from "./TrackPlayer";
import { useAuth } from "../utilities/AuthContext";
export default function Home() {
  const { token } = useAuth();
  return (
    <div>
      {token.length > 0 ? (
        <div>
          you are authenticated
          <div>
            track uploader goes here
            <div>
              <TrackUploader />
            </div>
            <div>
              <TrackPlayer />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/auth" />
      )}
    </div>
  );
}
//useHistory
//history.push()
//landing page after login
//feed of music recently uploaded or playlists recently created by other users that this user is following
//cover photo is also background for user on all pages

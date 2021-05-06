

{/*//nav is at top of all pages below header (in app.js), imported into app.js
        //except login for unregistered users

//nav menus links too
    //home
        //landing page after login
    //this user's page
        //{"username"}, on hover expands subnav, if clicked, links to this user page with uploads, following/followers and reacts
            //tracks
                 //^user subsubnav "tracks", expand on hover

                //favorites
                //hates
                //confuses
            //following
            //followers
    
            //input field for search, search.js rendered for search results


    //perhap new subnav expands on hover to reveal these buttons /link below
        //logout
            //logout pops up  as a modal "are you sure?", 
            //not a new page or speerate .js component
        //audio tornado switch
            //also not a new page
    
//don't show the nav menu link / button to the current page being displayed below nav,
    // so if on home, don't show home in nav menu, 
            // except logout, which is not a new page but modal redirecting to unregistered login
            //"audio tornado" is exempt of this, it's a button, on/off switch, not a seperate page, enables animate on hover psuedo-class in bootstrap on all the other pages.

// maybe side nav with transparencies ?
make nav auto load for unauthenticated users, perhap links to see public home feed of top users /uploads, unable to react or follow until authenticated
*/}

import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Nav(props) {
    return ( 
        <nav classname="navbar navbar-dark bg dark">
            <div classname="container-fluid mx-4">
                <a classname="navbar-brand text left">LÖÜD FÖG</a>
                    <span className="d-flex">
                        <Link to="/register" className="mx-3 btn-outline-danger">Sign Up</Link>
                        {/* link to login                       */}
                    </span>
            </div>
        </nav>
    )
}


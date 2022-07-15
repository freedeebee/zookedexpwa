import React from "react";
import { ProfileDetails, ProfileImage, ProfileName } from "./styles";

export default function Profile(){
    return (
        <>
        <ProfileImage src={"https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"} />
        <ProfileName>Test User</ProfileName>
        <div style={{marginTop: "50px"}}/>
        <ProfileDetails>Current points:</ProfileDetails>
        <ProfileDetails>5637</ProfileDetails>
        <div style={{marginTop: "50px"}}/>
        <ProfileDetails>Current donation status:</ProfileDetails>
        <ProfileDetails>EUR 167,56</ProfileDetails>
        </>

        
    )
}
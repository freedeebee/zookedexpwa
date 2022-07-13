import React from "react";
import { ProfileDetails, ProfileImage, ProfileName } from "./styles";

export default function Profile(){
    return (
        <>
        <ProfileImage src={"https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"} />
        <ProfileName>Test User 123</ProfileName>
        <ProfileDetails>Rank</ProfileDetails>
        <ProfileDetails>EUR 100,00</ProfileDetails>
        </>

        
    )
}
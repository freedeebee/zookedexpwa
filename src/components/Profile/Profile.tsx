import React from "react";
import {
  ProfileDetails,
  ProfileImage,
  ProfileName,
  Wave,
  WaveContainer,
} from "./styles";

export default function Profile() {
  return (
    <>
      <ProfileImage src={"https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"} />
      <ProfileName>Test User 123</ProfileName>
      <div style={{ marginTop: "50px" }} />
      <ProfileDetails>Current points:</ProfileDetails>
      <ProfileDetails>5637</ProfileDetails>
      <div style={{ marginTop: "50px" }} />
      <ProfileDetails>Current donation status:</ProfileDetails>
      <ProfileDetails>EUR 167,56</ProfileDetails>
      <WaveContainer></WaveContainer>
      <Wave xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#61892F'
          fillOpacity='1'
          d='M0,224L60,234.7C120,245,240,267,360,234.7C480,203,600,117,720,112C840,107,960,181,1080,224C1200,267,1320,277,1380,282.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </Wave>
    </>
  );
}

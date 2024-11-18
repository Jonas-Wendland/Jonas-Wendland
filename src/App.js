import profilePicture from "./images/Profile-Picture.jpg"
import styled from "styled-components";


function Homepage() {

  return (<>
    <FrontView>
    <img src={profilePicture} 
    alt="Profile-Picture" 
    width={150} 
    height={200}></img>
    <p>Jonas Wendland</p>
    <p>Frontend Entwickler</p>
    </FrontView>
    <AboutMe>
      <AboutMeDiv>
        <p>
          Ich bin ein Junior Entwickler der schon länger Interesse am programmieren hatte und jetzt endlich den weg des profesionellen programmieren einschlägt.
        </p>
      </AboutMeDiv>
    </AboutMe>
    </>
  );
}

const FrontView = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: rgb(2, 17, 9);
color: rgb(231, 253, 226);`

const AboutMe = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
background-color: rgb(2, 17, 9);
color: rgb(231, 253, 226);`

const AboutMeDiv = styled.div`
display: flex;
position: relative;
bottom: 0;
justify-content: center;
align-items: center;
width: 100vw;
height: 12rem;
background-color: rgb(19, 126, 150);
transform: rotate(-3deg);
transform-origin: bottom left;
`

export default Homepage;
import profilePicture from "./images/Profile-Picture.jpg"
import styled from "styled-components";


function Homepage() {

  return (<>
    <FrontView>
    <h1>Jonas Wendland</h1>
    <h2>Frontend Entwickler</h2>
    </FrontView>
    <AboutMe>
      <StyledImage>
    <StyledImg src={profilePicture} 
    alt="Profile-Picture" 
    width={300} 
    height={400}></StyledImg>
    </StyledImage>
      <AboutMeDiv>
        <StyledP>
          Ich bin ein Junior Entwickler der schon länger Interesse am programmieren hatte und jetzt endlich den weg des profesionellen programmieren einschlägt.
        </StyledP>
      </AboutMeDiv>
    </AboutMe>
    </>
  );
}

const FrontView = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
background-color: rgb(2, 17, 9);
color: rgb(231, 253, 226);`

const AboutMe = styled.section`
display: flex;
position: relative;
bottom: 0;
flex-direction: column;
height: 100vh;
background-color: rgb(2, 17, 9);
color: rgb(231, 253, 226);`

const AboutMeDiv = styled.div`
position: absolute;
bottom: 0; 
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 12rem;
background-color: rgb(19, 126, 150);
color: rgb(231, 253, 226);
transform: rotate(-3deg);
transform-origin: bottom left;
`

const StyledImage = styled.div`
display: flex;
justify-content: center;
`

const StyledImg = styled.img`
position: relative;
top: 5.8rem;
`

const StyledP = styled.p`
flex-wrap: wrap;
font-size: 1.3rem;
`

export default Homepage;
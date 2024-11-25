import profilePicture from "./lib/images/Profile-Picture.jpg"
import survivalPets1 from "./lib/images/survivalPets-1.png"
import survivalPets2 from "./lib/images/survivalPets-2.png"
import styled from "styled-components";
import SkillsIcon from "./components/svgicon";
import JavaScriptIcon from "./lib/SVGIcons/JavaScriptIcon";
import CSSIcon from "./lib/SVGIcons/CSSIcon";
import HTMLIcon from "./lib/SVGIcons/htmlIcon";
import ReactIcon from "./lib/SVGIcons/ReactIcon";
import NextJsIcon from "./lib/SVGIcons/NextJsIcon";
import MongoDBIcon from "./lib/SVGIcons/MongoDBIcon";
import APIIcon from "./lib/SVGIcons/APIIcon";


function Homepage() {

  return (<>
    <FrontView>
    <h1>Jonas Wendland</h1>
    <h2>Frontend Entwickler</h2>
    </FrontView>
    <AboutMe>
      <StyledHeader>About Me</StyledHeader>
      <StyledImage>
    <StyledImg src={profilePicture} 
    alt="Profile-Picture" 
    width={300} 
    height={400}></StyledImg>
    </StyledImage>
      <AboutMeDiv>
        <StyledP>
          Junior Entwickler der schon länger Interesse am programmieren hatte und jetzt endlich den weg des profesionellen programmieren einschlägt.
        </StyledP>
      </AboutMeDiv>
    </AboutMe>
    <SkillsSection>
      <StyledHeader>Skills</StyledHeader>
      <SkillsDiv>
        <StyledUl>
          <SkillsIcon icon={JavaScriptIcon} name="JavaScript"/>
          <SkillsIcon icon={CSSIcon} name="CSS" />
          <SkillsIcon icon={HTMLIcon} name="HTML" />
          <SkillsIcon icon={ReactIcon} name="React"/>
          <SkillsIcon icon={NextJsIcon} name="Next.js"/>
          <SkillsIcon icon={MongoDBIcon} name="MongoDB"/>
          <SkillsIcon icon={APIIcon} name="RESTful APIs"/>
          </StyledUl>
      </SkillsDiv>
    </SkillsSection>
    <ProjekteSection>
      <StyledHeader>Projekte</StyledHeader>
      <StyledH2>Survival Pets</StyledH2>
      <ProjekteDiv>
      <StyledImg src={survivalPets1} alt="Survival Pets 1" width={500} height={400}/>
      <ProjektImg2 src={survivalPets2} alt="Survival Pets 1" width={500} height={400}/>
      </ProjekteDiv>
    </ProjekteSection>
    </>
  );
}

const FrontView = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
color: rgb(231, 253, 226);
`

const AboutMe = styled.section`
display: flex;
position: relative;
bottom: 0;
flex-direction: column;
height: 100vh;
color: rgb(231, 253, 226);
`

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

const SkillsSection = styled.section`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;`

const SkillsDiv = styled.div`
width: 100vw;
background-color: rgb(19, 126, 150);`

const ProjekteSection = styled.section`
height: 100vh;`

const StyledHeader = styled.h3`
text-align: center;
color: rgb(19, 126, 150);
font-size: 5rem;
margin: 0;
`
const StyledH2 = styled.h2`
text-align: center;
color: rgb(19, 126, 150);
font-size: 2rem;
margin-bottom: 0;
`

const ProjekteDiv = styled.div`
display: flex;
flex-direction: row;
margin-left: 2rem;
`

const StyledImage = styled.div`
display: flex;
justify-content: center;
`
const StyledImg = styled.img`
position: relative;
object-fit: contain;
`

const ProjektImg2 = styled.img`
position: relative;
object-fit: contain;
left: -20rem;
top: 8rem;`

const StyledP = styled.p`
flex-wrap: wrap;
font-size: 1.3rem;
`

const StyledUl = styled.ul`
display: flex;
justify-content: space-evenly;
gap: 10rem;
flex-wrap: wrap;
flex-direction: row;
`

export default Homepage;
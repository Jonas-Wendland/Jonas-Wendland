import ProfilePicture from "../lib/images/Profile-Picture.jpg"
import styled from "styled-components";
import SkillsCardList from "../components/skillsCardList";
import ProjectsList from "../components/projectList";
import HireMeCard from "../components/hireMeCard";
import Header from "../components/header";


export default function Homepage() {

  return (<>
  <Header/>
  <FrontSection>
  <StyledGreeting>
    <StyledImg src={ProfilePicture} alt="ProfilePicture"></StyledImg>
    <StyledP>Mein Name ist Jonas Wendland und ich bin ein junior <span>Web-/Frontend</span>-entwickler. <br/>
      Diese Seite ist da um mich vorzustellen und zu zeigen was ich bis jetzt alles kann. 
    </StyledP>
  </StyledGreeting>
  <HireMeCard/>
  </FrontSection>
  <SkillsCardList/>
  <br/>
  <ProjectsList/>
  <footer>

  </footer>
    </>
  );
}

const StyledImg = styled.img`
border: rgb(19, 126, 150) 2px solid;
border-radius: 10rem;
object-fit: contain;
box-shadow: 5px 5px 5px black;
height: 200px;
width: 200px;
`

const StyledGreeting = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 2rem;`

const FrontSection = styled.section`
display: grid;
grid-template-columns: 1.3fr 1fr;
`

const StyledP = styled.p`
flex-wrap: wrap;
font-family: 'Merriweather', serif;`



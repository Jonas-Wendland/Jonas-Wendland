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
      Diese Seite ist da um mich vorzustellen und zu zeigen was ich bisher alles kann. 
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
border: #030f0f 3px solid;
border-radius: 10rem;
object-fit: contain;
box-shadow: 5px 5px 5px black;
height: 200px;
width: 200px;
@media (height >= 1200px) {
  height: 300px;
  width: 300px;}
  @media (width <= 768px) {
    height: 150px;
    width: 150px;
  }
`

const StyledGreeting = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
height: 30rem;
 @media (height <= 920px) {
  height: 25rem;}
@media (height >= 1200px) {
  height: 40rem;}
`

const FrontSection = styled.section`
display: grid;
grid-template-columns: 1.3fr 1fr;
@media (width <= 1200px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
`

const StyledP = styled.p`
flex-wrap: wrap;
font-family: 'Merriweather', serif;
font-size: 1.5rem;
padding-left: 2rem;
padding-right: 2rem;
@media (height >= 1200px) {
  font-size: 1.8rem;}
  @media (width <= 768px) {
    font-size: 1rem;
  }
  `



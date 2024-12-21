import ProfilePicture from "./lib/images/Profile-Picture.jpg";
import styled from "styled-components";
import SkillsCardList from "./components/skillsCardList";
import ProjectsList from "./components/projectList";
import Header from "./components/header";


function Homepage() {

  return (<>
  <Header/>
  <FrontSection>
  <StyledGreeting>
    <StyledImg src={ProfilePicture} alt="ProfilePicture"></StyledImg>
    <p>Mein Name ist Jonas Wendland und ich bin ein junior Web-/Frontend-entwickler. <br/>
      Diese Seite ist da um mich vorzustellen und zu zeigen was ich bis jetzt alles kann.
    </p>
  </StyledGreeting>
  <div></div>
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
flex-direction: column;`

const FrontSection = styled.section`
display: grid;
grid-template-columns: 2fr 1fr 1fr;
`



export default Homepage;
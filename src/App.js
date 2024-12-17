import ProfilePicture from "./lib/images/Profile-Picture.jpg";
import styled from "styled-components";
import SkillsCard from "./components/skillsCard";
import CSSIcon from "./lib/SVGIcons/CSSIcon"


function Homepage() {

  return (<>
  <header>

  </header>
  <FrontSection>
  <StyledGreeting>
    <StyledImg src={ProfilePicture} alt="ProfilePicture"></StyledImg>
    <p>Mein Name ist Jonas Wendland und ich bin ein junior Web-/Frontend-entwickler. <br/>
      Diese Seite ist da um mich vorzustellen und zu zeigen was ich bis jetzt alles kann.
    </p>
  </StyledGreeting>
  <div></div>
  </FrontSection>
  <SkillsCard skillIcon={CSSIcon} skillName={"CSS"}/>
  <footer>

  </footer>
    </>
  );
}

const StyledImg = styled.img`
border: rgb(46, 204, 113) 1px solid;
border-radius: 10rem;
object-fit: contain;
`

const StyledGreeting = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;`

const FrontSection = styled.section`
display: grid;
grid-template-columns: 2fr 1fr;
`

export default Homepage;
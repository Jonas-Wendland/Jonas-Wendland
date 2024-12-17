import ProfilePicture from "./lib/images/Profile-Picture.jpg";
import styled from "styled-components";
import SkillsCard from "./components/skillsCard";
import CSSIcon from "./lib/SVGIcons/CSSIcon"
import HTMLIcon from "./lib/SVGIcons/htmlIcon"
import JavaScriptIcon from "./lib/SVGIcons/JavaScriptIcon";
import MongoDBIcon from "./lib/SVGIcons/MongoDBIcon"
import NextJsIcon from "./lib/SVGIcons/NextJsIcon"
import APIIcon from "./lib/SVGIcons/APIIcon"
import ReactIcon from "./lib/SVGIcons/ReactIcon"


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
  <SkillCardList>
  <SkillsCard skillIcon={CSSIcon} skillName={"CSS"}/>
  <SkillsCard skillIcon={HTMLIcon} skillName={"HTML"}/>
  <SkillsCard skillIcon={JavaScriptIcon} skillName={"JavaScript"}/>
  <SkillsCard skillIcon={ReactIcon} skillName={"React"}/>
  <SkillsCard skillIcon={NextJsIcon} skillName={"Next.js"}/>
  <SkillsCard skillIcon={MongoDBIcon} skillName={"MongoDB"}/>
  <SkillsCard skillIcon={APIIcon} skillName={"API"}/>
  </SkillCardList>
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

const SkillCardList = styled.div`
display: flex;
gap: 2rem;
padding-left: 2rem;
`

export default Homepage;
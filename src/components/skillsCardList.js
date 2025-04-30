import SkillsCard from "./skillsCard";
import CSSIcon from "../lib/SVGIcons/CSSIcon"
import HTMLIcon from "../lib/SVGIcons/htmlIcon"
import JavaScriptIcon from "../lib/SVGIcons/JavaScriptIcon";
import MongoDBIcon from "../lib/SVGIcons/MongoDBIcon"
import NextJsIcon from "../lib/SVGIcons/NextJsIcon"
import APIIcon from "../lib/SVGIcons/APIIcon"
import ReactIcon from "../lib/SVGIcons/ReactIcon"
import styled from "styled-components";



export default function SkillsCardList(){
    return(
    <div>
    <StyledP>Skills</StyledP>
    <CardListContainer>
    <SkillCardList>
      <SkillsCard skillIcon={CSSIcon} skillName={"CSS"}/>
      <SkillsCard skillIcon={HTMLIcon} skillName={"HTML"}/>
      <SkillsCard skillIcon={JavaScriptIcon} skillName={"JavaScript"}/>
      <SkillsCard skillIcon={ReactIcon} skillName={"React"}/>
      <SkillsCard skillIcon={NextJsIcon} skillName={"Next.js"}/>
      <SkillsCard skillIcon={MongoDBIcon} skillName={"MongoDB"}/>
      <SkillsCard skillIcon={APIIcon} skillName={"API"}/>
    </SkillCardList>
    </CardListContainer>
    </div>
    )
}

const StyledP = styled.p`
font-size: 2rem;
padding: 0;
margin: 0;
padding-left: 5%;
color: white;
font-family: 'Playfair Display', serif;
`

const SkillCardList = styled.div`
background-color:rgb(0, 223, 67);
border-radius: 2rem;
border: solid black 2px;
display: flex;
gap: 2rem;
align-items: center;
padding-left: 2rem;
padding-right: 2rem;
overflow-x: auto;
flex-wrap: nowrap;
width: 90vw; 
height: 11rem;

&::-webkit-scrollbar {
  height: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: rgb(137, 240, 183);
  border-radius: 2rem;
}

&::-webkit-scrollbar-thumb:hover {
  background-color: rgb(86, 152, 116);
  border-radius: 2rem;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  margin-left: 1.5rem;
}

&::-webkit-scrollbar-button:end:increment {
  width: 2%;
}

`



   const CardListContainer = styled.div`
   display: flex;
   justify-content: center;
   `


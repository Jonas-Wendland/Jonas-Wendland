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
    return(<SkillCardList>
      <SkillsCard skillIcon={CSSIcon} skillName={"CSS"}/>
  <SkillsCard skillIcon={HTMLIcon} skillName={"HTML"}/>
  <SkillsCard skillIcon={JavaScriptIcon} skillName={"JavaScript"}/>
  <SkillsCard skillIcon={ReactIcon} skillName={"React"}/>
  <SkillsCard skillIcon={NextJsIcon} skillName={"Next.js"}/>
  <SkillsCard skillIcon={MongoDBIcon} skillName={"MongoDB"}/>
  <SkillsCard skillIcon={APIIcon} skillName={"API"}/>
    </SkillCardList>)
}

const SkillCardList = styled.div`
display: flex;
gap: 2rem;
padding-left: 2rem;
margin-right: 2rem;
overflow-x: auto;
flex-wrap: nowrap;
width: 100%; 
scrollbar-width: 1rem;
scrollbar-color: rgb(19, 126, 150) transparent;
padding-bottom: 1rem;

&::-webkit-scrollbar {
    height: 5rem; 
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(19, 126, 150);
    border-radius: 100px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(15, 100, 120);
  }
/* 
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
  display: none;
} */
`
import Icons from "./svgicon"
import styled from "styled-components"

export default function SkillsCard({skillIcon, skillName}){
    return(<>
    <StyledDiv>
        <Icons icon={skillIcon}/>
        <p>{skillName}</p>
    </StyledDiv>
        </>)
}

const StyledDiv = styled.div`
display: flex;
background-color: #03624c; 
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 2px solid black;
border-radius: 2rem;
height: 10rem;
width: 10rem;
box-shadow: 3px 3px 3px black;
@media (width <= 1000px) {
min-width: 7rem;
min-height: 7rem;
}
`
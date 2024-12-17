import SkillsIcon from "./svgicon"
import styled from "styled-components"

export default function SkillsCard({skillIcon, skillName}){
    return(<>
    <StyledDiv>
        <SkillsIcon icon={skillIcon}/>
        <p>{skillName}</p>
    </StyledDiv>
        </>)
}

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 2px solid black;
border-radius: 2rem;
min-height: 13rem;
max-width: 10rem;
`
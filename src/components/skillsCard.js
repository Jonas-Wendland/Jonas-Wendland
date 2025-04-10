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
min-height: 9rem;
min-width: 9rem;
max-width: 9rem;
box-shadow: 3px 3px 3px black;
@media (width <= 768px) {
    min-width: 7rem;
    min-height: 7rem;
    max-width: 7rem;
    max-height: 7rem;
}
`
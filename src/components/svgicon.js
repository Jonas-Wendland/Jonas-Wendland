import styled from "styled-components"


export default function SkillsIcon({icon: Icon, name}) {
    return(<StyledDiv>
        <div>
            <Icon></Icon>
        </div>
        <p>{name}</p>
    </StyledDiv>)
}

const StyledDiv = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

`
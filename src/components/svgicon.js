import styled from "styled-components"


export default function Icons({icon: Icon}) {
    return(<StyledDiv>
        <div>
            <Icon></Icon>
        </div>
    </StyledDiv>)
}

const StyledDiv = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

`
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
width: 64px;
height: 64px;

@media (width <= 768px){
width: 34px;
height: 34px;
}
`
import styled from "styled-components"


export default function ProjectsCard({projectImage1, projectImage2, projectName}) {
    return (<>
    <StyledDiv>
        <ImageContainer>
    <StyledImg1 src={projectImage1}/>
    <StyledImg2 src={projectImage2}/>
    </ImageContainer>
    <p>{projectName}</p>
    </StyledDiv>
    </>
    )
}

const StyledDiv = styled.div`
display: flex;
background-color: rgb(15, 42, 36); 
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 2px solid black;
border-radius: 2rem;
min-height: 9rem;
min-width: 9rem;
max-width: 9rem;
box-shadow: 3px 3px 3px black;
`

const StyledImg1 = styled.img`
object-fit: contain;
width: 80px;
height: 70px;
`

const StyledImg2 = styled.img`
display: flex;
position: absolute;
object-fit: contain;
width: 80px;
height: 70px;
top: 20px;
left: 15px;
`

const ImageContainer = styled.div`
display: flex;
position: relative;
`
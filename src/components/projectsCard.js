import styled from "styled-components"


export default function ProjectsCard({projectImage1, projectImage2, projectName}) {
    return (<>
    <StyledA href="https://github.com/Braun-Johannes/Survival-Pets" target="_blank" rel="noopener noreferrer">
        <ImageContainer>
    <StyledImg1 src={projectImage1}/>
    <StyledImg2 src={projectImage2}/>
    </ImageContainer>
    <p>{projectName}</p>
    </StyledA>
    </>
    )
}

const StyledA = styled.a`
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
text-decoration: none;
color: white;
font-family: 'Playfair Display', serif;
font-size: 1.2rem;
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
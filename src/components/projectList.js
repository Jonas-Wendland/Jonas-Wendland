import styled from "styled-components"
import ProjectsCard from "./projectsCard"
import survivalPetsMini1 from "../lib/images/survivalPets-mini-1.png"
import survivalPetsMini2 from "../lib/images/survivalPets-mini-2.png"



export default function ProjectsList() {
    return(<ProjectsListContainer>
    <ProjectList>
        <ProjectsCard  projectImage1={survivalPetsMini1} projectImage2={survivalPetsMini2} projectName={"Survival Pets"}/>
    </ProjectList>
    </ProjectsListContainer>
    )
}


const ProjectList = styled.div`
background-color: rgb(19, 126, 150);
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

const ProjectsListContainer = styled.div`
   display: flex;
   justify-content: center;
   `


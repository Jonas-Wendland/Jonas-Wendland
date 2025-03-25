import styled from "styled-components"


export default function HireMeCard() {
    return (<>
    <StyledHireme>
        <StyledH1> HIRE ME</StyledH1> 
        <StyledP>Ich bin offen für Stellenangebote und bin ganz heiß drauf endlich durchzusatrten 
        und bin bereit neues Wissen mir anzueignen.</StyledP>
        </StyledHireme>
    </>)
}


const StyledH1 = styled.h1`
font-size: 8rem;
margin: 0;
font-family: 'Playfair Display', serif;
`

const StyledHireme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const StyledP = styled.p`
width: 30rem;
flex-wrap: wrap;
font-family: 'Merriweather', serif;
padding-right: 2rem;
`
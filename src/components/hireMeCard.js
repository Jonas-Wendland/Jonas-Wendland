import styled from "styled-components"


export default function HireMeCard() {
    return (<>
    <StyledHireme>
        <StyledH1> HIRE ME</StyledH1> 
        <StyledP>Ich bin offen für Stellenangebote und bin ganz heiß drauf endlich durchzustarten 
        und bin bereit mir neues Wissen  anzueignen.</StyledP>
        </StyledHireme>
    </>)
}


const StyledH1 = styled.h1`
font-size: 8rem;
margin: 0;
font-family: 'Playfair Display', serif;
@media (width <= 768px) {
    font-size: 3rem;
}
`

const StyledHireme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const StyledP = styled.p`
font-size: 1.5rem;
flex-wrap: wrap;
font-family: 'Merriweather', serif;
padding-right: 2rem;
align-items: center;
justify-content: center;
@media (height >= 1200px) {
    font-size: 1.8rem;
}
@media (width <= 768px) {
        font-size: 1rem;
}
`
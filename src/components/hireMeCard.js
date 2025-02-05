import styled from "styled-components"


export default function HireMeCard() {
    return (<>
    <StyledHireme>
        <StyledH1> HIRE ME</StyledH1> 
        <p>Ich bin offen für Stellenangebote und bin ganz heiß drauf endlich durchzusatrten 
        und bin bereit neues Wissen mir anzueignen.</p>
        </StyledHireme>
    </>)
}


const StyledH1 = styled.h1`
font-size: 8rem;
margin: 0px 0px 0px 0px;

`

const StyledHireme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
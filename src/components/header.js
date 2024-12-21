import styled from "styled-components"
import Icons from "./svgicon"
import MenuIcon from "../lib/SVGIcons/MenuIcon"



export default function Header() {
    return (<>
    <HeaderContainer>
    <Button><Icons icon={MenuIcon}/></Button>
    </HeaderContainer>
    <StyledHr/>
    </>
    )
}

const HeaderContainer = styled.div`
display: flex;
width: calc(100vw - 1.5rem);
align-items: center;
height: 2.5rem;
justify-content: flex-end;
`

const Button = styled.button`
all: unset;
position: relative;
justify-content: center;
align-items: center;
width: 40px;
height: 25px;
top: 2px;
border: 2px solid black;
border-radius: 3px;
background-color: rgb(19, 126, 150);
`


const StyledHr = styled.hr`
border: 1px solid black;`
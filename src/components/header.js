import styled from "styled-components"
import Icons from "./svgicon"
import MenuIcon from "../lib/SVGIcons/MenuIcon"



export default function Header() {
    return (<HeaderContainer>
    <Button><Icons icon={MenuIcon}/></Button>
    </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
display: flex;
width: calc(100vw - 1.5rem);
height: 2em;
justify-content: flex-end;
`

const Button = styled.button`
all: unset;
position: relative;
justify-content: center;
align-items: center;
width: 40px;
height: 25px;
border: 2px solid black;
border-radius: 3px;
background-color: rgb(19, 126, 150);
top: 5px;
right: 5px;
`
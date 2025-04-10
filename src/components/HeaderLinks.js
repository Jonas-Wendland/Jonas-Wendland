import styled from "styled-components";
import Icons from "./svgicon";
import GithubIcon from "../lib/SVGIcons/GithubIcon";
import LinkedIn from "../lib/SVGIcons/LinkedIn";
import XingIcon from "../lib/SVGIcons/XingIcon";


export default function HeaderLinks() {
    return (<>
 
    <Styleda href="https://github.com/Jonas-Wendland" target="_blank" rel="noopener noreferrer">
        <Icons icon={GithubIcon}/>
        <p>Jonas-Wendland</p>
        </Styleda>
    <Styleda href="https://www.linkedin.com/in/jonas-wendland-5706b11a0/" target="_blank" rel="noopener noreferrer">
        <Icons icon={LinkedIn}/>
        <p>Jonas Wendland</p>
        </Styleda>
    <Styleda href="https://www.xing.com/profile/Jonas_Wendland2/web_profiles?expandNeffi=true" target="_blank" rel="noopener noreferrer">
        <Icons icon={XingIcon}/>
        <p>Jonas Wendland</p>
    </Styleda>
    </>
    )
}

const Styleda = styled.a`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 2rem;
    background-color: rgb(0, 223, 67);
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out; 
    
    &:hover {
        background-color: rgb(137, 240, 183);
        transform: scale(1.05);
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
`;
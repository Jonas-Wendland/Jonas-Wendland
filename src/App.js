import ProfilePicture from "./lib/images/Profile-Picture.jpg";
import styled from "styled-components";


function Homepage() {

  return (<>
  <header>

  </header>
  <div>
    <StyledImg src={ProfilePicture} alt="ProfilePicture"></StyledImg>
    <p>Mein Name ist Jonas Wendland und ich bin ein junior Web-/Frontend-entwickler. <br/>
      Diese Seite ist da um mich vorzustellen und zu zeigen was ich bis jetzt alles kann.
    </p>
  </div>

  <footer>

  </footer>
    </>
  );
}

const StyledImg = styled.img`
border: rgb(46, 204, 113) 1px solid;
border-radius: 10rem;
object-fit: contain;
`


export default Homepage;
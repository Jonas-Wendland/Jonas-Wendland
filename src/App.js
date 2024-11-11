import profilePicture from "./images/Profile-Picture.jpg"
import styled from "styled-components";


function Homepage() {

  return (<>
    <FrontView>
    <img src={profilePicture} 
    alt="Profile-Picture" 
    width={150} 
    height={200}></img>
    <p>Jonas Wendland</p>
    <p>Frontend Entwickler</p>
    </FrontView>
    </>
  );
}

const FrontView = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: rgb(8, 27, 2);
color: rgb(231, 253, 226)`

export default Homepage;

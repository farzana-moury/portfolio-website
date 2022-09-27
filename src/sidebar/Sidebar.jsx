import React, { useState } from "react"

import styled from "styled-components"
import home from "../sidebar/svg icons/home.svg"
import about from "../sidebar/svg icons/user.svg"
import portfolio from "../sidebar/svg icons/briefcase.svg"
import experience from "../sidebar/svg icons/building.svg"
import contact from "../sidebar/svg icons/letter.svg"

import { NavLink } from "react-router-dom"

const Container = styled.div`
  position: fixed;
  z-index: 2;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;

  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`

const SidebarContainer = styled.div`
background-color: var(--black);
width: 3.5rem;
height: 90vh;
margin-top: 0.9rem;
border-radius: 0 30px 30px 0;
padding: 1rem 0;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

position: relative;
`;

const SlickBar = styled.ul`
color: var(--white);
list-style: none;
display: block;
flex-direction: column;
text-align: left;
background-color: var(--black);

padding: 2rem 0;

position: absolute;
top: 6rem;
bottom: 5rem;
left: 0;

width: ${(props) => (props.clicked ? "11rem" : "3.5rem")};
transition: all 0.5s ease;
border-radius: 0 30px 30px 0;
`

const Item = styled(NavLink)`
  color: white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  padding-left: 1rem;

  &::hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`


const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>
            </Button>

            <SidebarContainer>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/"
                    >
                        <img src={home} alt="Home" />
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/about"
                    >
                        <img src={about} alt="About" />
                        <Text clicked={click}>About</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/portfolio"
                    >
                        <img src={portfolio} alt="Portfolio" />
                        <Text clicked={click}>Portfolio</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/experience"
                    >
                        <img src={experience} alt="Experience" />
                        <Text clicked={click}>Experience</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/contact"
                    >
                        <img src={contact} alt="Contact" />
                        <Text clicked={click}>Contact</Text>
                    </Item>
                </SlickBar>
            </SidebarContainer>
        </Container>
    )
}

export default Sidebar


import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() =>{ 
    const {user} = useContext(Context) 
    const history = useHistory()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href={MAIN_ROUTE}>Формуляр</Navbar.Brand>
            {!user.isAuth ? 
           <Nav  className="ml-auto" style={{color:'primary'}}>
           <Button variant={"outline-light"} className="mr-4" onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
           </Nav>
        :
        <Nav className="ml-auto" style={{color:'primary'}}>
        <Button variant={"outline-light"} disabled className="ml-2" onClick={() => history.push(ADMIN_ROUTE)}>Адмін-панель </Button>
        <Button variant={"outline-light"}  onClick={() => logOut()}>Вийти</Button>
        </Nav>
        
    }
            </Container>
        </Navbar>


        );
    });

export default NavBar;
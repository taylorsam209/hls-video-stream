import React, { Component } from "react";
import "./App.css";
import {
  AppWrapper,
  Header,
  Main,
  Footer,
  Container,
  Copyright,
  HeaderTitle,
  HeaderUserMenu,
  HeaderWrapper,
  HeaderUserAvatar
} from "./components/Theme";
import avatar from "./assets/avatar.png";
import Watch from "./components/pages/Watch";
import Home from "./components/pages/Home";
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <HeaderWrapper>
            <HeaderTitle>Camera</HeaderTitle>
            <HeaderUserMenu>
              <HeaderUserAvatar alt="avatar" src={avatar} />
            </HeaderUserMenu>
          </HeaderWrapper>
        </Header>
        <Main>
          <Container>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/watch/:id' component={Watch} />
            </Switch>
          
          </Container>
        </Main>
        <Footer>
          <Container>
            <Copyright>@ 2018 Camera Inc.</Copyright>
          </Container>
        </Footer>
      </AppWrapper>
    );
  }
}

export default App;

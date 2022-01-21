import { Header, Nav, Main, Footer } from '../layout';
import { styled } from '@mui/material/styles';
import ApplicationBar from './../common/ApplicationBar';
import SideNav from './../common/SideNav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const MainWrapper = styled('div')(`
  padding-left: 3rem;
  padding-top: 3rem;
`)

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => setIsOpen(!isOpen);
  

  return (
    <>
      <Header>
        {/* ApplicationBar Component placement */}
        <ApplicationBar status={isOpen} openDrawer={drawerHandler}/>
        {/* ApplicationBar Component placement */}
      </Header>
      <Nav>
        {/* SidebarNav Component placement */}
        <SideNav status={isOpen} toggleDrawer={drawerHandler}/>
        {/* SidebarNav Component placement */}
      </Nav>

      <Main>
        <MainWrapper>
        <Outlet />
        </MainWrapper>
      </Main>

      <Footer>
        {/* FooterContent Component placement */}

        {/* FooterContent Component placement */}
      </Footer>
    </>
  );
};

export default Dashboard;

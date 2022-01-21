import { Header, Nav, Main, Footer } from '../layout';
import { styled } from '@mui/material/styles';
import ApplicationBar from './../common/ApplicationBar';
import SideNav from './../common/SideNav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Container from '@mui/material/Container';

const MarginTop = styled('div')(({ theme, open }) => ({
  ...theme.mixins.toolbar,
}));

const MainWrapper = styled('div')(({ theme, open }) => ({
  marginLeft: `calc(${theme.spacing(6)})`,
  [theme.breakpoints.up('sm')]: {
    marginLeft: `calc(${theme.spacing(7)})`,
  },
}));

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => setIsOpen(!isOpen);

  return (
    <>
      <Header>
        {/* ApplicationBar Component placement */}
        <ApplicationBar status={isOpen} openDrawer={drawerHandler} />
        {/* ApplicationBar Component placement */}
      </Header>
      <Nav>
        {/* SidebarNav Component placement */}
        <SideNav status={isOpen} toggleDrawer={drawerHandler} />
        {/* SidebarNav Component placement */}
      </Nav>

      <Main>
        <MainWrapper>
          <MarginTop />
          <Container sx={{ marginTop: '3rem', marginBottom: '3rem', width: '100%' }}>
            <Outlet />
          </Container>
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

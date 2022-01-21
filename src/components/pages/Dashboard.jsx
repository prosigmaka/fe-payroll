import { Header, Nav, Main, Footer } from '../layout';
import ApplicationBar from './../common/ApplicationBar';
import SideNav from './../common/SideNav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => setIsOpen(!isOpen);
  console.log(isOpen);
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
        <Outlet />
      </Main>

      <Footer>
        {/* FooterContent Component placement */}

        {/* FooterContent Component placement */}
      </Footer>
    </>
  );
};

export default Dashboard;

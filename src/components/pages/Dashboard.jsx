import { Header, Nav, Main, Footer } from '../layout';
import { Outlet } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <>
      <Header>
        {/* ApplicationBar Component placement */}

        {/* ApplicationBar Component placement */}
      </Header>
      <Nav>
        {/* SidebarNav Component placement */}

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

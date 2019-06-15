import React, {Component} from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      leftSidebarOpen: true,
      rightSidebarOpen: false,
    };
  }
  toggleSidebar = (sidebar) => {
    let value = this.state[sidebar+'SidebarOpen'];
    let state = this.state;
    state[sidebar+'SidebarOpen'] = !value;
    this.setState(state);
  }
  render(){
    return (
      <Container fluid={true}>
        <Row>
          <Sidebar open={this.state.leftSidebarOpen} side={'left'} toggleSidebar={() => this.toggleSidebar('left')}/>
          <Col>

          </Col>
          <Sidebar open={this.state.rightSidebarOpen} side={'right'} toggleSidebar={() => this.toggleSidebar('right')}/>
        </Row>
      </Container>
    );
  }
}

export default App;

import React, { Component } from "react";
import Sidebar from "components/sidebar/Sidebar";
import Avatar from "components/avatar/Avatar";
import { Container, Row, Col } from "reactstrap";
import "App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSidebarOpen: true,
      rightSidebarOpen: true
    };
  }
  toggleSidebar = sidebar => {
    let value = this.state[sidebar + "SidebarOpen"];
    let state = this.state;
    state[sidebar + "SidebarOpen"] = !value;
    this.setState(state);
  };
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Sidebar
            open={this.state.leftSidebarOpen}
            side={"left"}
            toggleSidebar={() => this.toggleSidebar("left")}
          >
            <div className="mt-3">
              <Avatar frame={'img-thumbnail'}/>
            </div>
          </Sidebar>
          <Col className="main-content" />
          <Sidebar
            open={this.state.rightSidebarOpen}
            side={"right"}
            toggleSidebar={() => this.toggleSidebar("right")}
          />
        </Row>
      </Container>
    );
  }
}

export default App;

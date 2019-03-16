import React from "react";

import { Layout, Row, Col, Button } from "antd";

const { Content } = Layout;



class CartPage extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <Row>
          <Col>
            <ul>
              <li>Manage Account</li>
              <li>History</li>
            </ul>
          </Col>
          <Col>
            <div>
              <h2>Change Password</h2>
              <span>Old: <input></input></span>
              <span>New: <input></input></span>
              <h2>Delete Account</h2>
            </div>
          </Col>
        </Row>
      </Content>
    );
  }
};

export default CartPage;
import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const MyFooter = () => (
  <Footer className="footer">
    <Row>
      <a className="footer__link" href="/">About</a>
      <a className="footer__link" href="/">Help</a>
      <a className="footer__link" href="/">Language: English</a>
    </Row>
    <Row>
      All Rights Reserved (C) 2019.
      </Row>
  </Footer>
);

export default MyFooter;
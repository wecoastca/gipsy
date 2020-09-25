import React from 'react';
import { Layout, Row, Col } from 'antd';
import logo from '../../logo.svg';

const { Header } = Layout;

const HeaderLayout = () => (
  <Header>
    <Row justify="space-between">
      <Col>
        <Row>
          <img src={logo} alt="Logo" />
        </Row>
      </Col>
    </Row>
  </Header>

);

export default HeaderLayout;

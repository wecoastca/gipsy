import React from 'react';
import { Layout, Row, Col } from 'antd';
import logo from '../../logo.svg';

const HeaderLayout = () => (
  <Layout>
    <Row justify="space-between">
      <Col>
        <Row>
          <img src={logo} alt="Logo" />
        </Row>
      </Col>
    </Row>
  </Layout>

);

export default HeaderLayout;
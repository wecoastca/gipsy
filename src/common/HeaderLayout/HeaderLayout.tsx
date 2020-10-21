import React from 'react';
import {
  PageHeader, Row, Col,
} from 'antd';
import logo from '../../logo.svg';

const HeaderLayout = () => (
  <PageHeader title="title">
    <Row justify="space-between">
      <Col>
        <Row>
          <img src={logo} alt="Logo" width="100" height="100" />
        </Row>
      </Col>
    </Row>
  </PageHeader>
);

export default HeaderLayout;

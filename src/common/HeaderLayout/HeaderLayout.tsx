import React from 'react';
import {
  PageHeader, Row, Col, Layout, Button,
} from 'antd';
import FireOutlined from '@ant-design/icons';
import Paragraph from 'antd/lib/typography/Paragraph';
import style from './HeaderLayout.module.css';

const { Header } = Layout;

const HeaderLayout = () => (
  <>
    <Header className={style.pageHeader}>
      <Row justify="space-between" className={style.row}>
        <Col>
          <Row>
            <FireOutlined style={{ color: '#66788a' }} />
            <Paragraph>
              pupa and lupa
            </Paragraph>
          </Row>
        </Col>
      </Row>
    </Header>
  </>
);

export default HeaderLayout;

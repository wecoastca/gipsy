import React from 'react';
import { Layout } from 'antd';
import HeaderLayout from './HeaderLayout/HeaderLayout';

type Props = {
  children?: React.ReactNode;
}

const PageLayout = (props: Props) => (
  <Layout>
    <HeaderLayout />
  </Layout>
);

export default PageLayout;
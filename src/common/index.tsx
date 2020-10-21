import React from 'react';
import { Layout } from 'antd';
import HeaderLayout from './HeaderLayout/HeaderLayout';
import ContentLayout from './ContentLayout/ContentLayout';
import FooterLayout from './FooterLayout/FooterLayout';

type Props = {
  children?: React.ReactNode;
}

const PageLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
      <HeaderLayout />
      <ContentLayout>
        {children}
      </ContentLayout>
      <FooterLayout />
    </Layout>
  );
};

export default PageLayout;

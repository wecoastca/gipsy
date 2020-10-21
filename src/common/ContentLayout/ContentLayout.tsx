import { Empty, Layout } from 'antd';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const ContentLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
      {children || <Empty />}
    </Layout>
  );
};

export default ContentLayout;

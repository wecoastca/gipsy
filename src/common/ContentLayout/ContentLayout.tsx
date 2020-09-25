import { Empty, Layout, PageHeader } from 'antd';
import { title } from 'process';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const ContentLayout = (props: Props) => {
  const { children } = props;
  return (
    <Layout>
      <PageHeader
        title={title || ''}
      />
      {children || <Empty />}
    </Layout>
  );
};

export default ContentLayout;

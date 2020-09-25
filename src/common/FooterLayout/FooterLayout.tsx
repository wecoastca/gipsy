import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;

type Props = {
 children?: React.ReactNode;
};

const FooterLayout = (props: Props) => {
  const { children } = props;

  return (
    <Footer>
      {children}
    </Footer>
  );
};

export default FooterLayout;

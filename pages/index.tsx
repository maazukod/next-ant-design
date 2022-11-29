import React, { useState } from 'react';
import SiteLayout from '@/layout';

const PageContent = () => {
  return <>This is a home page</>;
};

export default function Home() {
  const userInfo = useState({
    user: 'max',
    token: '32423xcsf453534534fcsxc234',
  });

  return (
    <SiteLayout title='Home'>
      <PageContent />
    </SiteLayout>
  );
}

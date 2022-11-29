import React from 'react';
import SiteLayout from '../../layout';
import UserTable from './content/userTable';

const PageContent = () => {
  return (
    <>
      <UserTable />
    </>
  );
};

export default function Users() {
  return (
    <SiteLayout title='Users'>
      <PageContent />
    </SiteLayout>
  );
}

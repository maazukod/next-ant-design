import React, { useState } from 'react';
import {
  SideNavigationRoutes,
  TopRightNavigationRoutes,
} from '../config/routes';
import Head from 'next/head';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';

const { Header, Content, Sider } = Layout;

interface PageContentProps {
  title: string;
  children: React.ReactNode;
}

const SiteLayout = ({ title, children }: PageContentProps) => {
  const router = useRouter();

  const handleClick = (page: string) => {
    router.push('/' + page);
  };
  const TopRightNavigation: MenuProps['items'] = TopRightNavigationRoutes?.map(
    (item) => {
      // @ts-ignore
      item.onClick = () => handleClick(item.route);
      item.icon = item.icon;
      return item;
    }
  );

  const SideNavigation: MenuProps['items'] = SideNavigationRoutes?.map(
    (item) => {
      // @ts-ignore
      item.onClick = () => handleClick(item.route);
      if (item !== undefined) {
        // @ts-ignore
        item.icon = item.icon;
      }
      return item;
    }
  );

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout style={{ height: '100vh' }}>
        <Header className='header' style={{ background: 'white' }}>
          <div className='logo' />
          <Menu
            theme='light'
            mode='horizontal'
            items={TopRightNavigation}
            style={{
              justifyContent: 'flex-end',

              width: '100%',
            }}
          />
        </Header>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              style={{ height: '100%', borderRight: 0 }}
              items={SideNavigation}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                color: 'black',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default SiteLayout;

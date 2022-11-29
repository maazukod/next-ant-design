import React, { useState } from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Alert, Space } from 'antd';
import Image from 'next/image';

const { Header, Content, Footer } = Layout;

export default function Login() {
  const router = useRouter();
  const [authenticatedError, setAuthenticatedError] = useState(null);
  const onFinish = (credentials: any) => {
    if (credentials.username == 'max' && credentials.password == 'admin') {
      router.push('/');
    } else {
      setAuthenticatedError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout style={{ height: '100vh' }}>
        <Content>
          <div
            className='site-layout-content'
            style={{
              color: 'black',
              marginLeft: '38%',
              marginRight: '38%',
              marginTop: '8%',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: 'black',
                justifyContent: 'center',
              }}
            >
              <Image src='/logo.svg' height={44} width={44} alt='' />
              &nbsp; &nbsp;
              <span style={{ fontSize: '33px', fontWeight: 500 }}>
                Ant Design
              </span>
            </div>

            <p style={{ textAlign: 'center' }}>
              Ant Design 是西湖区最具影响力的 Webs 设计规范 ss
            </p>

            <Form
              name='normal_login'
              className='login-form'
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>

              {authenticatedError && (
                <>
                  <Alert
                    // message='Incorrect Credentials'
                    description='Invalid username or password'
                    type='error'
                    banner
                  />
                  <br />
                </>
              )}

              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox> &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                </Form.Item>

                <a className='login-form-forgot' href=''>
                  Forgot password
                </a>
              </Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                style={{ width: '100%' }}
              >
                Log in
              </Button>
            </Form>
          </div>
        </Content>
      </Layout>
    </>
  );
}

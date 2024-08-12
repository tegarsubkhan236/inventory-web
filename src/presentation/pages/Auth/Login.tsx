import AuthLayout from '../../layout/AuthLayout.tsx'
import Logo from '../../assets/img/ziromart_logo.svg'
import GoogleSVG from '../../assets/icon/google.svg'
import { Button, Card, Divider, Flex, Form, FormProps, Input, Typography } from 'antd'
import AntIcon from '@ant-design/icons'
import { useAuthStore } from '../../../infrastructure/auth/authStore.ts'

const { Text, Title } = Typography

const GoogleIcon = () => (
  <AntIcon
    style={{ verticalAlign: 0 }}
    component={() => <img src={GoogleSVG} alt={'googleIcon'} height={22} width={22} />}
  />
)

const Login = () => {
  const { login, token } = useAuthStore()

  type FieldType = {
    identity: string
    password: string
  }

  const handleLogin: FormProps<FieldType>['onFinish'] = async values => {
    await login(values.identity, values.password)
    console.log(token)
  }

  return (
    <AuthLayout>
      <Card>
        <Flex vertical align='center'>
          <img src={Logo} alt='logo' height={60} width={60} />
          <Title level={3}>Login to your Account</Title>
        </Flex>

        <Form
          onFinish={values => handleLogin(values)}
          // onFinishFailed={(errorInfo) => handleLoginFailed(errorInfo)}
          autoComplete='off'
          style={{ paddingTop: '20px' }}
        >
          <Flex vertical align='center' gap={10}>
            <Button
              // loading={isLoading}
              htmlType='submit'
              size='large'
              block
            >
              <GoogleIcon />
              <Text>Continue with Google</Text>
            </Button>
            <Divider plain>
              <Text type='secondary'>Or continue with</Text>
            </Divider>
          </Flex>

          <Form.Item<FieldType>
            name='identity'
            rules={[
              {
                required: true,
                message: 'Please input your username or email!',
              },
            ]}
          >
            <Input placeholder='Email / Username' />
          </Form.Item>
          <Form.Item<FieldType>
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Flex vertical align='flex-end' gap={10}>
            <Text type='secondary'>Forgot Password ?</Text>
            <Button
              // loading={isLoading}
              type='primary'
              htmlType='submit'
              size='large'
              block
            >
              Login
            </Button>
          </Flex>
        </Form>
      </Card>
    </AuthLayout>
  )
}

export default Login

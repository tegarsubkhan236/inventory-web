import ISider from './_partials/ISider.tsx'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import IHeader from './_partials/IHeader.tsx'

const { Content } = Layout

const DashboardLayout = () => {
  return (
    <Layout>
      <IHeader />
      <Layout hasSider>
        <ISider />
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout

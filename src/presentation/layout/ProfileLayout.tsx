import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import IHeader from './_partials/IHeader.tsx'

const { Content } = Layout

const ProfileLayout = () => {
  return (
    <Layout>
      <IHeader />
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProfileLayout

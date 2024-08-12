import { Col, Flex, Layout, Row } from 'antd'
import BtnFullscreen from '../_components/BtnFullscreen.tsx'
import BtnNotification from '../_components/BtnNotification.tsx'
import BtnAvatar from '../_components/BtnAvatar.tsx'
import BtnLanguage from '../_components/BtnLanguage.tsx'
import HeaderLogo from '../_components/HeaderLogo.tsx'

const { Header } = Layout

const IHeader = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        height: '48px',
        background: '#001529',
        padding: '0 16px',
        boxShadow: '0px -1px 0px 0px rgba(240,240,240,1) inset',
      }}
    >
      <Row justify='space-between'>
        <Col span={8}>
          <HeaderLogo />
        </Col>
        <Col span={8}>
          <Flex align='center' justify='flex-end'>
            <BtnNotification />
            <BtnAvatar />
            <BtnFullscreen />
            <BtnLanguage />
          </Flex>
        </Col>
      </Row>
    </Header>
  )
}

export default IHeader

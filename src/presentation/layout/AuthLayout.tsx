import { ReactNode } from 'react'
import { Carousel, Col, Row } from 'antd'
import LoginSvg from '../assets/img/secure-login-animate.svg'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Row justify='center' align='middle' style={{ height: '100vh', margin: '0 24px 0 24px' }}>
      <Col span={14}>
        <Carousel {...settings}>
          <div>
            <img key={1} src={LoginSvg} alt={'LoginSvg_1'} height={600} />
          </div>
          <div>
            <img key={2} src={LoginSvg} alt={'LoginSvg_2'} height={600} />
          </div>
          <div>
            <img key={3} src={LoginSvg} alt={'LoginSvg_3'} height={600} />
          </div>
        </Carousel>
      </Col>
      <Col span={8} push={1}>
        {children}
      </Col>
    </Row>
  )
}

export default AuthLayout

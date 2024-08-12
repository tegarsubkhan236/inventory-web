import Icon from '@ant-design/icons'
import profileSvg from '../../assets/icon/profil.svg'
import { Button, Dropdown, Flex, GetProps, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HeaderItems } from '../../AppMenuItem.tsx'

type CustomIconComponentProps = GetProps<typeof Icon>

const BtnAvatar = () => {
  const navigate = useNavigate()
  const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={() => <img src={profileSvg} alt='profileSvg' />} {...props} />
  )

  return (
    <Dropdown
      menu={{
        items: HeaderItems,
        onClick: ({ key }) => navigate(key),
      }}
      trigger={['click']}
    >
      <Button type='text'>
        <Flex gap='small'>
          <ProfileIcon />
          <Typography.Text style={{ color: 'white' }}>Tegar Subkhan Fauzi</Typography.Text>
        </Flex>
      </Button>
    </Dropdown>
  )
}

export default BtnAvatar

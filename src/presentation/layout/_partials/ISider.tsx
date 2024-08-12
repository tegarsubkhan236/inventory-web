import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps, theme } from 'antd'
import { SiderItems } from '../../AppMenuItem.tsx'

const { Sider } = Layout

interface LevelKeysProps {
  key?: string
  children?: LevelKeysProps[]
}
const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {}
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach(item => {
      if (item.key) {
        key[item.key] = level
      }
      if (item.children) {
        return func(item.children, level + 1)
      }
    })
  }
  func(items1)
  return key
}
const levelKeys = getLevelKeys(SiderItems as LevelKeysProps[])

const ISider = () => {
  const [selectedKey, setSelectedKey] = useState<string>('/')
  const [stateOpenKeys, setStateOpenKeys] = useState([''])
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const navigate = useNavigate()

  const onOpenChange: MenuProps['onOpenChange'] = openKeys => {
    const currentOpenKey = openKeys.find(key => stateOpenKeys.indexOf(key) === -1)
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter(key => key !== currentOpenKey)
        .findIndex(key => levelKeys[key] === levelKeys[currentOpenKey])

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter(key => levelKeys[key] <= levelKeys[currentOpenKey])
      )
    } else {
      // close
      setStateOpenKeys(openKeys)
    }
  }

  return (
    <Sider
      style={{
        background: colorBgContainer,
        width: '208px',
        minHeight: 'calc(100vh - 48px)',
        boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.15)',
      }}
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={[selectedKey]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        items={SiderItems}
        style={{ height: '100%' }}
        onClick={({ key }) => {
          setSelectedKey(key)
          navigate(key)
        }}
      />
    </Sider>
  )
}

export default ISider

import {useEffect, useState} from 'react'
import screenfull from 'screenfull'
import {Button, message, Tooltip} from 'antd'
import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons'

const BtnFullscreen = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [isFullscreen, setIsFullscreen] = useState(false)
    const click = () => {
        if (!screenfull.isEnabled) {
            messageApi.warning('you browser can not work')
            return false
        }
        screenfull.toggle()
    }
    const change = () => {
        setIsFullscreen(screenfull.isFullscreen)
    }
    useEffect(() => {
        screenfull.isEnabled && screenfull.on('change', change)
        return () => {
            screenfull.isEnabled && screenfull.off('change', change)
        }
    }, [])

    const title = isFullscreen ? 'Exit FullScreen' : 'Open FullScreen'

    return (
        <>
            {contextHolder}
            <Tooltip placement="bottom" title={title}>
                <Button
                    type="text"
                    icon={isFullscreen ? (<FullscreenExitOutlined
                        style={{
                            fontSize: '14px', color: 'white'
                        }}
                    />) : (<FullscreenOutlined
                        style={{
                            fontSize: '14px', color: 'white'
                        }}
                    />)}
                    onClick={click}
                    style={{
                        width: '48px', height: '48px',
                    }}
                />
            </Tooltip>
        </>
    )
}

export default BtnFullscreen

import {Flex, Typography} from "antd";
import {Link} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to="/">
            <Flex gap={8} align="center">
                <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    height="32"
                    width="32"
                    alt="logo"
                />
                <Typography.Text
                    style={{
                        fontSize: '18px', lineHeight: '32px', fontWeight: 'bold', color: 'white', padding: '8px 16px 8px 0',
                    }}
                >
                    Ant Design Pro
                </Typography.Text>
            </Flex>
        </Link>
    );
};

export default HeaderLogo;
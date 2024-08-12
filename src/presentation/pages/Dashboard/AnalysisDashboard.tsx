import {Card, Col, Divider, Flex, Row, Space, Typography} from "antd";
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import graph_1 from './asset/graph_1.svg';
import graph_2 from './asset/graph_2.svg';
import graph_3 from './asset/graph_3.svg';
import AnalysisBarChart from "./components/AnalysisBarChart.tsx";

const {Text, Title} = Typography

const AnalysisDashboard = () => {
    return (
        <div style={{
            margin: '20px 24px',
        }}>
            <Row justify={"space-between"} gutter={20} style={{marginBottom: '20px'}}>
                <Col span={6}>
                    <Card bordered={false}>
                        <Flex vertical>
                            <Flex justify="space-between">
                                <Text type="secondary">Total Sales</Text>
                                <InfoCircleOutlined style={{fontSize: '16px'}} />
                            </Flex>
                            <Title level={3}>¥ 126,560</Title>
                            <Space>
                                <Text>WoW Change 12%</Text>
                                <CaretUpOutlined style={{fontSize: '14px', color: '#52C41A'}}/>
                            </Space>
                            <Space>
                                <Text>DoD Change 11%</Text>
                                <CaretDownOutlined style={{fontSize: '14px', color: '#FF4D4F'}}/>
                            </Space>
                            <Divider style={{margin: '6px 0 6px 0'}}/>
                            <Text>Daily Sales ￥12,423</Text>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Flex vertical>
                            <Flex justify="space-between">
                                <Text type="secondary">Visits</Text>
                                <InfoCircleOutlined style={{fontSize: '16px'}} />
                            </Flex>
                            <Title level={3}>8,846</Title>
                            <img src={graph_1} height={40} alt="graph_1"/>
                            <Divider style={{margin: '10px 0 6px 0'}}/>
                            <Text>Daily Visits 1,234</Text>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Flex vertical>
                            <Flex justify="space-between">
                                <Text type="secondary">Payments</Text>
                                <InfoCircleOutlined style={{fontSize: '16px'}} />
                            </Flex>
                            <Title level={3}>6,254</Title>
                            <img src={graph_2} height={40} alt="graph_2"/>
                            <Divider style={{margin: '10px 0 6px 0'}}/>
                            <Text>Conversion Rate 60%</Text>
                        </Flex>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card bordered={false}>
                        <Flex vertical>
                            <Flex justify="space-between">
                                <Text type="secondary">Operational Effect</Text>
                                <InfoCircleOutlined style={{fontSize: '16px'}} />
                            </Flex>
                            <Title level={3}>78%</Title>
                            <img src={graph_3} height={40} alt="graph_3"/>
                            <Divider style={{margin: '10px 0 6px 0'}}/>
                            <Space>
                                <Text>WoW Change</Text>
                                <CaretUpOutlined style={{fontSize: '14px', color: '#52C41A'}}/>
                                <Text>DoD Change</Text>
                            </Space>
                        </Flex>
                    </Card>
                </Col>
            </Row>

            <Row style={{marginBottom: '20px'}}>
                <Col span={24}>
                    <AnalysisBarChart />
                </Col>
            </Row>
        </div>
    );
};

export default AnalysisDashboard;
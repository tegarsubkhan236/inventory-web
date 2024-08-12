import {
    Avatar,
    Card,
    Col,
    Divider,
    Flex,
    List,
    Row, Segmented,
    Space,
    Typography
} from "antd";
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import BarChart from "../../../components/BarChart";
import {useState} from "react";

const AnalysisBarChart = () => {
    const [chartSegment, setChartSegment] = useState<string>('sales')
    const [chartFilter, setChartFilter] = useState<string>('all_month')

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Des"],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 6, 4, 2, 10, 5, 12, 5],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Stores Sales Trend',
                font: {
                    size: 14,
                },
                padding: {
                    top: 15,
                    bottom: 15
                }
            },
            legend: {
                display: false,
            },
        },
    };

    const listData = [
        {
            username: "Gongzhuan No.1 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.2 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.3 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.4 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.5 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.6 Shop",
            sales: "323,234"
        },
        {
            username: "Gongzhuan No.7 Shop",
            sales: "323,234"
        },
    ]

    return (
        <Card>
            <Row justify="space-between">
                <Col span={8}>
                    <Segmented
                        options={[
                            { value: 'sales', label: 'Sales', icon: <BarsOutlined /> },
                            { value: 'visits', label: 'Visits', icon: <AppstoreOutlined /> },
                        ]}
                        defaultValue={chartSegment}
                        onChange={(value) => console.log(value)}
                    />
                </Col>
                <Col span={16}>
                    <Flex justify="flex-end" align="center">
                        <Segmented
                            options={[
                                { value: 'all_day', label: 'All Day' },
                                { value: 'all_week', label: 'All Week' },
                                { value: 'all_month', label: 'All Month' },
                                { value: 'all_year', label: 'All Year' },
                            ]}
                            defaultValue={chartFilter}
                            onChange={(value) => console.log(value)}
                        />
                    </Flex>
                </Col>
            </Row>
            <Divider style={{margin: '6px 0 6px 0'}}/>
            <Row gutter={20}>
                <Col span={17}>
                    <BarChart data={chartData} options={chartOptions}/>
                </Col>
                <Col span={7}>
                    <List
                        size="small"
                        header={<Typography.Text strong>Sales Ranking</Typography.Text>}
                        dataSource={listData}
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={<Avatar key={index} size={16} style={{background: '#FF4D4F'}}>{index + 1}</Avatar>}
                                    title={
                                        <Space size="middle">
                                            <Typography.Text>{item.username}</Typography.Text>
                                            <Typography.Text>{item.sales}</Typography.Text>
                                        </Space>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default AnalysisBarChart;
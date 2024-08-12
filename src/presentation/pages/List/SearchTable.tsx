import PageHeader from "../../components/PageHeader";
import PageContent from "../../components/PageContent";
import {Badge, Button, Card, Divider, Flex, FormProps, Table} from "antd";
import {PlusOutlined, SettingOutlined, ColumnHeightOutlined, ReloadOutlined} from '@ant-design/icons';
import ExpandableForm from "../../components/ExpandableForm";

const SearchTable = () => {
    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const dataSource = [
        {
            key: '1',
            rule_name: 'TradeCode 99',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 3636066,
            status: 1,
            last_dispatch_time: '2021-02-21',
        },
        {
            key: '2',
            rule_name: 'TradeCode 98',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 23400230,
            status: 2,
            last_dispatch_time: '2021-02-22',
        },
        {
            key: '3',
            rule_name: 'TradeCode 97',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 423875,
            status: 2,
            last_dispatch_time: '2021-02-21',
        },
        {
            key: '4',
            rule_name: 'TradeCode 96',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 2315235,
            status: 1,
            last_dispatch_time: '2021-02-21',
        },
        {
            key: '5',
            rule_name: 'TradeCode 95',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 1294243,
            status: 1,
            last_dispatch_time: '2021-02-21',
        },
        {
            key: '6',
            rule_name: 'TradeCode 94',
            description: 'Lorem ipsum dolor sit amet',
            service_call: 4215124,
            status: 2,
            last_dispatch_time: '2021-02-21',
        },
    ];

    const columns = [
        {
            title: 'Rule Name',
            dataIndex: 'rule_name',
            key: 'rule_name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Service Call',
            dataIndex: 'service_call',
            key: 'service_call',
            render: (text: number | bigint) => text.toLocaleString()
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: number) => {
                if (status === 1) {
                    return <Badge status="success" text="Success" />;
                } else if (status === 2) {
                    return <Badge status="error" text="Error" />;
                } else {
                    return null;
                }
            }
        },
        {
            title: 'Last Dispatch Time',
            dataIndex: 'last_dispatch_time',
            key: 'last_dispatch_time',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => {
                return (
                    <>
                        <a>Config</a>
                        <Divider type="vertical"/>
                        <a>Subscription Alert</a>
                    </>
                )
            }
        },
    ];

    const formItems = [
        {
            label: 'Rule Name',
            name: 'rule_name',
            type: 'input',
            hidden: false
        }, {
        label: 'Description', name: 'description', type: 'input', hidden: false },
        { label: 'Service Calls', name: 'service_calls', type: 'input', hidden: true },
        {
            label: 'Status',
            name: 'status',
            type: 'radio',
            options: [{ label: 'Active', value: 'active' }, { label: 'Inactive', value: 'inactive' }],
            hidden: true,
        },
        {
            label: 'Last Dispatch Time',
            name: 'last_dispatch_time',
            type: 'select',
            options: [
                { label: 'Today', value: 'today' },
                { label: 'Yesterday', value: 'yesterday' },
                { label: 'Last Week', value: 'last_week' },
            ],
            hidden: true,
        },
    ];

    const CardExtra = () => {
        return (
            <Flex gap={5}>
                <Button>View Log</Button>
                <Button type="primary" icon={<PlusOutlined/>}>Add New</Button>
                <Flex gap={2}>
                    <Button icon={<ReloadOutlined />}/>
                    <Button icon={<ColumnHeightOutlined />} />
                    <Button icon={<SettingOutlined />} />
                </Flex>
            </Flex>
        )
    }

    return (
        <>
            <PageHeader
                title="Search Table"
            />
            <PageContent>
                <ExpandableForm formItems={formItems} onFinish={onFinish}/>
                <Card
                    extra={<CardExtra/>}
                >
                    <Table dataSource={dataSource} columns={columns} />;
                </Card>
            </PageContent>
        </>
    );
};

export default SearchTable;
import PageHeader from "../../components/PageHeader";
import {Typography} from "antd";
import PageContent from "../../components/PageContent";

const AdvancedForm = () => {
    return (
        <>
            <PageHeader
                title="Advanced Form"
                content={
                    <Typography.Text>
                        Advanced forms are commonly seen in scenarios where large quantities of data are entered and submitted at once.
                    </Typography.Text>
                }
            />
            <PageContent>
                <h1>Hallo Sample</h1>
            </PageContent>
        </>
    );
};

export default AdvancedForm;
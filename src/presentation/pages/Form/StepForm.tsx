import PageHeader from "../../components/PageHeader";
import {Typography} from "antd";
import PageContent from "../../components/PageContent";

const StepForm = () => {
    return (
        <>
            <PageHeader
                title="Step Form"
                content={
                    <Typography.Text>
                        Break down a lengthy or unfamiliar form task into multiple steps that the user is then guided through.
                    </Typography.Text>
                }
            />
            <PageContent>
                <h1>Hallo Sample</h1>
            </PageContent>
        </>
    );
};

export default StepForm;
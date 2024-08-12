import Icon from "@ant-design/icons";
import languageSvg from "../../assets/icon/language.svg";
import {Button, GetProps} from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const BtnLanguage = () => {
    const LanguageIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={() => <img src={languageSvg} alt="languageSvg"/>} {...props} />);

    return (
        <Button
            type="text"
            icon={<LanguageIcon
                style={{
                    color: 'darkred'
                }}
            />}
        />
    )
}

export default BtnLanguage
import {CSSProperties, ReactNode} from "react";

interface PageContentProps {
    children: ReactNode;
    style?: CSSProperties;
}

const Index = ({children, style} : PageContentProps) => {
    return (
        <div
            style={{
                margin: '20px 24px',
                ...style
            }}
        >
            {children}
        </div>
    );
};

export default Index;
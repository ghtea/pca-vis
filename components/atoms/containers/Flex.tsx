import { Flex as ThemeUiFlex, FlexProps as ThemeUiFlexProps } from "theme-ui"

export type FlexProps = ThemeUiFlexProps & {
};

export const Flex: React.FunctionComponent<FlexProps> = (props) => (<ThemeUiFlex {...props}/>);
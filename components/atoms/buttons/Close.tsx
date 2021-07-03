import { Close as ThemeUiClose, CloseProps as ThemeUiCloseProps } from "theme-ui"

export type CloseProps = ThemeUiCloseProps & {
};

export const Close: React.FunctionComponent<CloseProps> = (props) => (<ThemeUiClose {...props}/>);
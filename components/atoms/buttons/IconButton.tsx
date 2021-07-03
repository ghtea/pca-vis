import { IconButton as ThemeUiIconButton, IconButtonProps as ThemeUiIconButtonProps } from "theme-ui"

export type IconButtonProps = ThemeUiIconButtonProps & {
};

export const IconButton: React.FunctionComponent<IconButtonProps> = (props) => (<ThemeUiIconButton {...props}/>);
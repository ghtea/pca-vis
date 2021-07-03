import { Button as ThemeUiButton, ButtonProps as ThemeUiButtonProps } from "theme-ui"

export type ButtonProps = ThemeUiButtonProps & {
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => (<ThemeUiButton {...props}/>);
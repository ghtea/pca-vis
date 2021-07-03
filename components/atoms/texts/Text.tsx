import { Text as ThemeUiText, TextProps as ThemeUiTextProps } from "theme-ui"

export type TextProps = ThemeUiTextProps & {
};

export const Text: React.FunctionComponent<TextProps> = (props) => (<ThemeUiText {...props}/>);
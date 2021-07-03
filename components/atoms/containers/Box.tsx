import { Box as ThemeUiBox, BoxProps as ThemeUiBoxProps } from "theme-ui"

export type BoxProps = ThemeUiBoxProps & {
};

export const Box: React.FunctionComponent<BoxProps> = (props) => (<ThemeUiBox {...props}/>);
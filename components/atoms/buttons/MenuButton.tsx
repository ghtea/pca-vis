import { MenuButton as ThemeUiMenuButton, MenuButtonProps as ThemeUiMenuButtonProps } from "theme-ui"

export type MenuButtonProps = ThemeUiMenuButtonProps & {
};

export const MenuButton: React.FunctionComponent<MenuButtonProps> = (props) => (<ThemeUiMenuButton {...props}/>);
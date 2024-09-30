export type ThemeData = {
    backgroundColor: string,
    white: string,
    black: string,
    primary: string,
    light_primary: string,
    ligth_grey: string
    font_bold: string
    font_regular: string
}

const lightTheme: ThemeData = {
    backgroundColor: "#E8E8E8",
    white: "#FFFFFF",
    black: "#1B1A1A",
    light_primary: "#C382F5",
    primary: "#AA69FC",
    ligth_grey: "#E8E8E8",
    font_bold: "Inter_Extra_Bold",
    font_regular: "Inter_Regular",
}

export const themes = {
    light: lightTheme,
};

export type ThemeNames = keyof typeof themes;




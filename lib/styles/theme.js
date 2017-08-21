

let theme = {},
    obj = null;

theme.setTheme = (options) => {
    obj = options;
}

theme.getTheme = () => {
    if (!obj) return
    return obj
}

export default theme


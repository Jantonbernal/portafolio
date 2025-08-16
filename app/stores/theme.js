export const useThemeStore = defineStore('theme', () => {
    const theme = useTheme();

    const toggleTheme = () => {
        let themeChanged = theme.global.current.value.dark ? 'light' : 'dark'
        theme.change(themeChanged);
    }

    const iconTheme = computed(() => {
        if (theme.global.name.value == 'light') {
            return 'mdi-weather-sunny'
        }
        return 'mdi mdi-weather-night'
    })

    const colorTheme = computed(() => {
        if (theme.global.name.value == 'light') {
            return 'yellow'
        }
        return 'black'
    })

    const currentTheme = computed(() => {
        return theme.global.name.value
    })

    return {
        toggleTheme,
        iconTheme,
        colorTheme,
        currentTheme
    }
}, {
    persist: true,
})
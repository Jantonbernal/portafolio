export const useMenuStore = defineStore('menu', () => {
    const drawer = ref(true);
    const menus = ref([]);

    const changeDrawer = (value) => {
        console.log(`Drawer changed to: ${value}`);
        
        drawer.value = value;
    }

    return {
        drawer,
        menus,
        changeDrawer
    }
}, {
    persist: true,
})
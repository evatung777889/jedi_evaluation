import { updatePreset } from '@primeuix/themes';
import { computed, reactive } from 'vue';

const layoutConfig = reactive({
    preset: 'Aura',
    primary: 'green',
    surface: null,
    menuMode: 'static'
});

const layoutState = reactive({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    activeMenuItem: null
});

export function useLayout() {
    const toggleMenu = () => {
        if (layoutConfig.menuMode === 'overlay') {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }

        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

    return {
        layoutConfig,
        layoutState,
        toggleMenu,
        isSidebarActive
    };
}

export function updateColors(type, color) {
    const { layoutConfig } = useLayout();

    if (type === 'primary') {
        console.log('Applying primary color:', color);
        layoutConfig.primary = color.name;
        updatePreset({
            semantic: {
                primary: color.palette
            }
        });

        if (color.name === 'green') {
            console.log('Setting green theme variables');
            document.documentElement.style.setProperty('--menu-button-bg', '#CCFBF1');
            document.documentElement.style.setProperty('--menu-button-color', '#115E59');
            document.documentElement.style.setProperty('--topbar-background', 'linear-gradient(to top, #008479, #005A73)');
            document.documentElement.style.setProperty('--primary-color-light', '#D1EDE8');
            document.documentElement.style.setProperty('--panel-color', '#F1FCF0');
        } else if (color.name === 'blue') {
            console.log('Setting blue theme variables');
            document.documentElement.style.setProperty('--menu-button-bg', '#D9EAFF');
            document.documentElement.style.setProperty('--menu-button-color', '#2F5983');
            document.documentElement.style.setProperty('--topbar-background', 'linear-gradient(to top, #20617A, #414F8F)');
            document.documentElement.style.setProperty('--primary-color-light', '#D1D5ED');
            document.documentElement.style.setProperty('--panel-color', '#F0F0FC');
        }
    }
}

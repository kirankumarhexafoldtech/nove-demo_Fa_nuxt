import { defineStore } from "pinia";

export const mainStore = defineStore('mainstore',

{

    state: ()=>({
        isExpanded:true,
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        isRTL: false,
        color: "",
        sidebarType: "bg-white",
        darkMode: false,
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        layout: "default",
    }),
    

}
)

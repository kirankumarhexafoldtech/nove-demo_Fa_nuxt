export default{
    toggleIsExpanded(state){
        state.isExpanded=!state.isExpanded
    },
    toggleConfigurator(state) {
        state.showConfig = !state.showConfig;
      },
      navbarMinimize(state) {
        const sidenav_show = document.querySelector("#app");
  
        if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-hidden")) {
          sidenav_show.classList.add("g-sidenav-pinned");
          sidenav_show.classList.remove("g-sidenav-hidden");
          state.isPinned = true;
        } else if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-pinned")) {
          sidenav_show.classList.add("g-sidenav-hidden");
          sidenav_show.classList.remove("g-sidenav-pinned");
          state.isPinned = false;
        } else if (sidenav_show.classList.contains("g-sidenav-show") && window.innerWidth < 1200 ) {
          sidenav_show.classList.add("g-sidenav-pinned");
          state.isPinned = true;
        } else {
          sidenav_show.classList.add("g-sidenav-hidden");
          state.isPinned = true;
        }
      },
      setSidebarType(state, payload) {
        state.sidebarType = payload;
      },
      navbarFixed(state) {
        if (state.isNavFixed === false) {
          state.isNavFixed = true;
        } else {
          state.isNavFixed = false;
        }
      },
      toggleDefaultLayout(state) {
        state.showNavbar = !state.showNavbar;
        state.showSidenav = !state.showSidenav;
        state.showFooter = !state.showFooter;
      },
}
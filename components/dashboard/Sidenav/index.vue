<template>
  <div>

    <div 
    class="position-absolute w-100 min-height-300 top-0"
    >
    <span class="mask  " style="background-color: #073552;"></span>
      
    </div>
    
    <div
    
    id="sidenav-main"
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-4 "
    :class="` ${sidebarType} ${
      isRTL ? 'fixed-end me-3 rotate-caret' : 'fixed-start ms-3'
    } ${layout === 'landing' ? 'bg-transparent shadow-none' : ''}`"
    >

    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img src="../../../assets/svg/nova_gas_logo.svg" class="navbar-brand-img" alt="Sidebar logo" />
        </a>
        <div class="ml-auto">
          <div
            class="sidenav-toggler d-none d-xl-block"
           
          >
          <a
          href=""
          class="p-0 nav-link text-body"
        >
          <div class="sidenav-toggler-inner">
            <i
              class="sidenav-toggler-line"
              
            ></i>
            <i
              class="sidenav-toggler-line"
             
            ></i>
            <i
              class="sidenav-toggler-line"
              
            ></i>
          </div>
        </a>
        </div>
        </div>
      </div>
    </div>


    <!-- <div class="sidenav-header">
      <NuxtLink to="/" class="m-0 navbar-brand">
        <img src="../../assets/svg/nova_logo.svg"  srcset="" class="navbar-brand-img h-100"
          alt="main_logo"/>
      </NuxtLink>
    </div> -->
    <hr class="mt-0 horizontal dark" />

    <SidenavList/>

    </div>
   
   
  </div>
 

</template>

<script>
import SidenavList from './SidenavList.vue';

export default{
    name: "Index",
    data() {
        return {
            layout: this.$store.state.layout,
            isRTL: this.$store.state.isRTL,
            sidebarType: this.$store.state.sidebarType,
            darkMode: this.$store.state.darkMode,
            show:false
        };
    },
    created() {
        // this.layout = this.$store.state.layout;
        // this.isRTL = this.$store.state.isRTL;
        // this.sidebarType = this.$store.state.sidebarType;
        // this.darkMode = this.$store.state.darkMode;
    },
    components: { SidenavList },
    methods:{
      onMouseover(){
        
      }
    }
}
</script>
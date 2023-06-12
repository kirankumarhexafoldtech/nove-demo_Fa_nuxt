<template>
  <div>

    <div 
    class="position-absolute w-100 min-height-300 top-0"
    >
    <span class="mask  " style="background-color: #073552;"></span>
      
    </div>
    
    <div
    
    id="sidenav-main"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white "
    
    :class="$store.state.isExpanded ? 'w-full expand-div' : 'w-4 shrink-div'"
    >

    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#" :class="$store.state.isExpanded ? '': 'd-none'">
          <img src="../../../assets/svg/nova_gas_logo.svg" class="navbar-brand-img" alt="Sidebar logo" />
        </a>
        <div class="ml-auto">
          <div
            class="sidenav-toggler d-none d-xl-block"
           
          >
          <div
        
          class="p-0 nav-link text-body cursor-pointer"
          @click="handleIsExpanded()"
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
        </div>
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
          
        };
    },
    components: { SidenavList },
    methods:{
      handleIsExpanded(){
       this.$store.commit('toggleIsExpanded')
      }
    }
    
}
</script>

<style>


</style>
<template>
  <div>

    <div 
    class="position-absolute w-100 min-height-300 top-0 navbar-light"
    >
    <span class="mask  " style="background-color: #073552;"></span>
      
    </div>
    
    <div
    
    id="sidenav-main"
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white "
    
    :class="store.$state.isExpanded ? 'w-full expand-div' : 'w-4 shrink-div'"
    >

    <div class="scrollbar-inner" ref="sidebarScrollArea">
      <div class="sidenav-header d-flex align-items-center">
        <a class="navbar-brand" href="#" :class="store.$state.isExpanded ? '': 'd-none'">
          <img src="/nova-logo-1.png" class="navbar-brand-img" alt="Sidebar logo" />
        </a>
        <div class="ml-auto">
          <div
            :class="store.$state.isExpanded ?  'sidebar-bread sidebar-bread-open' : 'sidebar-bread sidebar-bread-close'"
          
          >
          <div
          
          class="p-0 nav-link text-body cursor-pointer "
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


   
    <hr class="mt-0 horizontal dark" />

    <SidenavList/>

    </div>
   
   
  </div>
 

</template>

<script>
import { mainStore } from '~/store';

export default{
    name: "Index",
    setup(){
      const store = mainStore();
      return {
        store
      }
    },
    data() {
        return {
          
        };
    },
    methods:{
      handleIsExpanded(){
       this.store.$state.isExpanded = !this.store.$state.isExpanded;

      }
    }
    
}
</script>

<style scoped>
.sidenav{
  min-width:70px;
}

.sidebar-bread-open{
 position: relative;
 left:55px;
}

.sidebar-bread-close{
  margin-left: 31px;
}


</style>
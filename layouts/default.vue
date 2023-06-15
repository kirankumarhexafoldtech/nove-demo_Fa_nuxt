<template>
    <div class="bg-light">
        <Sidebar />
        <main 
        :class="store.$state.isExpanded ? 'layout-dash-true expand-div ' : 'layout-dash-false shrink-layout-div '" 
        class="main-content position-relative  ">
            <NavBar/>
            <slot/>
        </main>
    </div>
</template>

<script setup>
import Sidebar from "~/components/dashboard/Sidenav/index.vue"
import NavBar from "~/components/navbar/NavBar.vue";
import { mainStore } from "~/store";

const store = mainStore();


</script>
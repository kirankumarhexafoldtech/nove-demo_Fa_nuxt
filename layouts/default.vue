<template>
    <div class="bg-light">
        <Sidenav />
        <main 
        :class="store.$state.isExpanded ? 'layout-dash-true expand-div ' : 'layout-dash-false shrink-layout-div '" 
        class="main-content position-relative  ">
            <Navbar/>
            <slot/>
        </main>
    </div>
</template>

<script setup>
import { mainStore } from "~/store";

const store = mainStore();


</script>
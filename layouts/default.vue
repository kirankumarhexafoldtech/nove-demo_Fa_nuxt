<template>
    <div class="bg-light">
        <Sidebar />
        <main class="main-content position-relative max-height-vh-100 h-100">

            <Nuxt/>
        </main>
    </div>
</template>

<script setup>
import Sidebar from "~/components/dashboard/Sidenav/index.vue"
</script>
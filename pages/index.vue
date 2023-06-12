<template>
  <div>


    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <KpiComponents class="z-index-2"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KpiComponents from "@/components/cards/KpiComponents.vue"
export default Vue.extend({
  name: 'IndexPage',
  components: {
    KpiComponents
  }
})
</script>

<template>
  <div :class="$store.state.isExpanded ? 'layout-dash-true expand-div ' : 'layout-dash-false shrink-layout-div '" 
  class="100vw"
  >


    <div class="px-2">
      <!-- <div class="row"> -->
        <!-- <div class="col-lg-12"> -->
          <KpiComponents />
        <!-- </div> -->
      <!-- </div> -->
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

<style >
.layout-dash-true{
  padding-left:13.5%;
}
.layout-dash-false{
  padding-left: 4%;
}

@media screen and(max-width:760px) {
  .shrink-layout-div {
    min-width:400px;
    padding-left: 70px;
    border:1px solid red;
  }
}


</style>

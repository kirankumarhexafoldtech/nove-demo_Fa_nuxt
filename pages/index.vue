<template>
  <div :class="$store.state.isExpanded ? 'layout-dash-true expand-div ' : 'layout-dash-false shrink-layout-div '" 
  class="100vw"
  >


    <div class="px-2">


      <!-- User Kpi  -->

      <div class="w-100 d-flex flex-gap-20 px-4 py-3">
            <div >

              <UserKpiComponent 
              name="Yaw Graham"
              roll="Distributor"
              status="true"
              usercard="user-card-27"
              >
                <template #profile>
                  <img src="../assets/img/team-1.jpg" alt="" class="user-profile"  style="width:73px"/>
                </template>
              </UserKpiComponent>
            </div>
            <div >

              <UserKpiComponent 
              usercard="user-card-35"
              userdetails="true"
              />
            </div>
          </div>

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
import UserKpiComponent from '~/components/cards/UserKpiComponent.vue';
export default Vue.extend({
  name: 'IndexPage',
  components: {
    KpiComponents,
    UserKpiComponent
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

<template>
   <div 
  class="100vw "
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


            <div class="px-4">

                <div class="mt-4 row">
            <div class="mt-4 col-md-6 mt-md-0">
              <GradientLineChart id="chart-line" title="Overall Sales" description="<i class='fa fa-arrow-up text-success'></i>
      <span class='font-weight-bold'>4% more</span> in 2021" :chart="{
        labels: [
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Mobile Apps',
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          },
        ],
      }" />
            </div>

            <div class="col-md-6">
              <BarChart title="Overall Sales" height="300" :chart="{
                labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
                datasets: {
                  label: 'Sales by age',
                  data: [15, 20, 12, 60, 20, 15],
                },
              }" />
            </div>

            <div class="mt-4 row ">
              <div class="col-lg-3 col-md-6 col-12 mt-3 ">
                <LineChart id="chart-widgets-1" title="Sales" title2="3kg | Steel" :value="{
                  amount: 'GHs 90',
                  percentage: { value: '+5% since last month', color: 'success' },
                }" :chart="{
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: {
    label: 'Income',
    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
  },
}" />
              </div>
              <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                <line-chart id="chart-widgets-2" title="Sales" title2="3kg | Steel" :value="{
                  amount: 'GHs 93',
                  percentage: { value: '+6% since last month', color: 'success' },
                }" :chart="{
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: {
    label: 'Income',
    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
  },
}" />
              </div>
              <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                <line-chart id="chart-widgets-3" title="Sales" title2="3kg | Steel" :value="{
                  amount: 'GHs 93',
                  percentage: { value: '+6% since last month', color: 'success' },
                }" :chart="{
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: {
    label: 'Income',
    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
  },
}" />
              </div>
              <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                <line-chart id="chart-widgets-4" title="Sales" title2="3kg | Steel" :value="{
                  amount: 'GHs 93',
                  percentage: { value: '+6% since last month', color: 'success' },
                }" :chart="{
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: {
    label: 'Income',
    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
  },
}" />
              </div>
              <div class="col-lg-3 col-md-6 col-12 mt-3 col-4">
                <line-chart id="chart-widgets-5" title="Sales" title2="3kg | Steel" :value="{
                  amount: 'GHs 93',
                  percentage: { value: '+6% since last month', color: 'success' },
                }" :chart="{
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: {
    label: 'Income',
    data: [50, 45, 60, 60, 80, 65, 90, 80, 100],
  },
}" />
              </div>
            </div>
            <div class="row">
              <UserOrderTable />
            </div>
          </div>
            </div>

    </div>

  </div>
  </template>
  
  <script>
  import UserKpiComponent from '~/components/cards/UserKpiComponent.vue';
import { mainStore } from '~/store';
import KpiComponents from '~/components/cards/KpiComponents.vue';
import GradientLineChart from '~/components/charts/GradientLineChart.vue';
import BarChart from '~/components/charts/BarChart.vue';
import LineChart from '~/components/charts/LineChart.vue';
import UserOrderTable from "~/components/tables/UserOrderTable.vue"
  export default{
    setup() {
        const store = mainStore();
        return {
            store
        };
    },
    components: { UserKpiComponent, KpiComponents, GradientLineChart, BarChart, LineChart, UserOrderTable }
}
  </script>

<style>
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
  
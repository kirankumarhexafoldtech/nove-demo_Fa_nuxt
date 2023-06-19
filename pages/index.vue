<template>
   <div 
  class="100vw "
  >


    <div class="px-2">


      <!-- User Kpi  -->

      <div class="w-100 d-flex flex-gap-20 px-4 py-3">
            <div >

                

              <CardUser 
              name="Yaw Graham"
              roll="Distributor"
              status="true"
              usercard="user-card-27"
              >
                <template #profile>
                  <img src="../assets/img/team-1.jpg" alt="" class="user-profile"  style="width:73px"/>
                </template>
              </CardUser>
            </div>
            <div >

              <CardUser 
              usercard="user-card-35"
              userdetails="true"
              />
            </div>
          </div>

      <!-- <div class="row"> -->
        <!-- <div class="col-lg-12"> -->
          <CardKpi />
        <!-- </div> -->
      <!-- </div> -->


            <div class="px-4 ">

                <div class="mt-4 row">
            <div class="mt-4 col-md-6 mt-md-0">
              <ChartGradientLine id="chart-line" title="Overall Sales" description="<i class='fa fa-arrow-up text-success'></i>
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

            <div class="col-md-6 ">
              <ChartBar title="Overall Sales" height="300"  class="bar-chart-padd" :chart="{
                labels: ['16-20', '21-25', '26-30', '31-36', '36-42', '42+'],
                datasets: {
                  label: 'Sales by age',
                  data: [15, 20, 12, 60, 20, 15],
                },
              }" />
            </div>

            <div class="mt-4 row ">
              <div class="col-lg-3 col-md-6 col-12 mt-3 ">
                <ChartLine id="chart-widgets-1" title="Sales" title2="3kg | Steel" :value="{
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
                <ChartLine id="chart-widgets-2" title="Sales" title2="3kg | Steel" :value="{
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
                <ChartLine id="chart-widgets-3" title="Sales" title2="3kg | Steel" :value="{
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
                <ChartLine id="chart-widgets-4" title="Sales" title2="3kg | Steel" :value="{
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
                <ChartLine id="chart-widgets-5" title="Sales" title2="3kg | Steel" :value="{
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
              <TableUserOrder />
            </div>
          </div>
            </div>

    </div>

  </div>
  </template>
  
  <script>
import { mainStore } from '~/store';
  export default{
    setup() {
        const store = mainStore();
        return {
            store
        };
    },
}
  </script>

<style>


@media screen and(max-width:760px) {
 
}


</style>
  
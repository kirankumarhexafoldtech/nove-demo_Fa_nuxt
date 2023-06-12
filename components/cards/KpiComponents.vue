<template>
    <div class="row">
        <!-- customer icon -->
        <div class="col-lg-3 col-md-6 col-12">
            <MiniStatisticsCard title="Overall customers" value="600" description="<span
            class='text-sm font-weight-bolder text-success'
            >+1.5%</span> since last week" :icon="{
                // component: 'ni ni-money-coins',
                background: 'bg-gradient-primary',
                shape: 'rounded-circle'
            }">
                <template #icon>
                    <img src="../../assets/svg/customer_icon.svg" alt="" srcset="">
                </template>

            </MiniStatisticsCard>

        </div>
        <!-- Deport manager icon -->
        <div class="col-lg-3 col-md-6 col-12">

            <MiniStatisticsCard title="Deport manager" value="500" description="<span
      class='text-sm font-weight-bolder text-success'
      >+1.2%</span> since last week" :icon="{
          component: 'ni ni-world',
          background: 'bg-gradient-danger',
          shape: 'rounded-circle'
      }">
                <template #icon>
                    <img src="../../assets/svg/deport_manager_icon.svg" alt="" srcset="">
                </template>

            </MiniStatisticsCard>
        </div>
        <div class="col-lg-3 col-md-6 col-12">

            <MiniStatisticsCard title="Delivery trucks & agents" value="100" description="<span
      class='text-sm font-weight-bolder text-danger'
      >-0.5%</span> since last week" :icon="{
          component: 'ni ni-paper-diploma',
          background: 'bg-gradient-success',
          shape: 'rounded-circle'
      }" >
       <template #icon>
                    <img src="../../assets/svg/delivery_agent_vehicle_icon.svg" alt="" srcset="">
                </template>
      
    </MiniStatisticsCard>



        </div>
        <div class="col-lg-3 col-md-6 col-12">

            <MiniStatisticsCard title="Complaints" value="10" description="<span
      class='text-sm font-weight-bolder text-success'
      >+0%</span> since last week" :icon="{
          // component: 'ni ni-cart',
          background: 'bg-gradient-warning',
          shape: 'rounded-circle'
      }"  >
     <template #icon>
                    <img src="../../assets/svg/customer_complaints_icon.svg" alt="" srcset="">
                </template>  
    </MiniStatisticsCard>
        </div>
    </div>
</template>

<script>
import MiniStatisticsCard from './MiniStatisticsCard.vue';
export default {
    name: "KpiComponents",
    comments: {
        MiniStatisticsCard
    },
    components: { MiniStatisticsCard }
}

</script>
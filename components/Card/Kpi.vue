<template>

<div class="py-4 container-fluid">

    <div class="row">
    
        <div class="col-lg12">
        
        <div class="row">
            <!-- customer icon -->
            <div class="col-lg-3 col-md-6 col-12">
                <CardKpiModel title="Overall customers" value="600" description="<span
                class='text-sm font-weight-bolder text-success'
                >+1.5%</span> since last week" :icon="{
                    background: 'bg-gradient-primary',
                    shape: 'rounded-circle'
                }">
                    <template #icon>
                        <img src="../../assets/svg/customer_icon.svg" alt="" srcset="">
                    </template>
        
                </CardKpiModel>
        
            </div>
            <!-- Deport manager icon -->
            <div class="col-lg-3 col-md-6 col-12">
        
                <CardKpiModel title="Deport manager" value="500" description="<span
          class='text-sm font-weight-bolder text-success'
          >+1.2%</span> since last week" :icon="{
              component: 'ni ni-world',
              background: 'bg-gradient-danger',
              shape: 'rounded-circle'
          }">
                    <template #icon>
                        <img src="../../assets/svg/deport_manager_icon.svg" alt="" srcset="">
                    </template>
        
                </CardKpiModel>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
        
                <CardKpiModel title="Delivery trucks & agents" value="100" description="<span
          class='text-sm font-weight-bolder text-danger'
          >-0.5%</span> since last week" :icon="{
              component: 'ni ni-paper-diploma',
              background: 'bg-gradient-success',
              shape: 'rounded-circle'
          }" >
           <template #icon>
                        <img src="../../assets/svg/delivery_agent_vehicle_icon.svg" alt="" srcset="">
                    </template>
          
        </CardKpiModel>
        
        
        
            </div>
            <div class="col-lg-3 col-md-6 col-12">
        
                <CardKpiModel title="Complaints" value="10" description="<span
          class='text-sm font-weight-bolder text-success'
          >+0%</span> since last week" :icon="{
              // component: 'ni ni-cart',
              background: 'bg-gradient-warning',
              shape: 'rounded-circle'
          }"  >
         <template #icon>
                        <img src="../../assets/svg/customer_complaints_icon.svg" alt="" srcset="">
                    </template>  
        </CardKpiModel>
            </div>
        </div>
        </div>
    </div>
</div>



</template>


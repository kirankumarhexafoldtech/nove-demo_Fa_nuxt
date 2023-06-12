<template>
    <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
    >
    <ul class="navbar-nav">
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Dashboards"
            >
            <template #icon>
                <img src="../../../assets/svg/dashboard_home_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Distributor"
            >
            <template #icon>
                <img src="../../../assets/svg/distributor_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Support System"
            >
            <template #icon>
                <img src="../../../assets/svg/support_system_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Customers"
            >
            <template #icon>
                <img src="../../../assets/svg/customer_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Delivery Agents"
            >
            <template #icon>
                <img src="../../../assets/svg/delivery_agent_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Products"
            >
            <template #icon>
                <img src="../../../assets/svg/products_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Manage Admins"
            >
            <template #icon>
                <img src="../../../assets/svg/manage_admin_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Zones"
            >
            <template #icon>
                <img src="../../../assets/svg/zones_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
            
        </li>
       

        <li class="nav-item">
            <SidenavCollapse
          nav-text="Transactions"
            >
            <template #icon>
                <img src="../../../assets/svg/transactions_dashboard_icon.png" alt="">
          </template>

            </SidenavCollapse>
            
        </li>
        <li class="nav-item">
            <SidenavCollapse
          nav-text="Report"
            >
            <template #icon>
                <img src="../../../assets/svg/report_admin_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
        </li>
        <br/>
        <hr class="mt-0 horizontal dark" />

        <li class="nav-item">
            <SidenavCollapse
          nav-text="Settings"
            >
            <template #icon>
                <img src="../../../assets/svg/settings_dashboard_icon.svg" alt="">
          </template>

            </SidenavCollapse>
            
        </li>
        
    </ul>

    </div>
</template>

<script>
import SidenavCollapse from './SidenavCollapse.vue';

export default{
    name: "SidenavList",
    components: { SidenavCollapse }
}
</script>
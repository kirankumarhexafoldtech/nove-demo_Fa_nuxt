<template>
  <div class="mb-3 card">
    <div class="p-3 card-body">
      <div
        class="d-flex flex-row-reverse justify-content-between"
       
      >
        <div
          class="text-center shadow icon icon-shape"
          :class="[
            typeof icon === 'object'
              ? `${icon.background} ${icon.shape}`
              : 'border-radius-md',
           
          ]"
        >
        
         
              <div class="text-lg mt-2 opacity-10"  aria-hidden="true" style="margin-left: auto;margin-right: auto;">
                <slot name="icon">

                </slot>
              </div>



          <div>

          </div>
        </div>
        <div >
          <div class="numbers">
            <p
              class="mb-0 text-sm text-uppercase font-weight-bold"
              
            >
              {{ typeof title === "string" ? title : title.text }}
            </p>
            <h5 :class="`mb-0 font-weight-bolder `">
              {{
                (value && typeof value === "string") ||
                (value && typeof value === "number")
                  ? value
                  : value.text
              }}
            
             
            </h5>
            <!--  eslint-disable-next-line vue/no-v-html -->
            <p v-if="description" class="mt-2 mb-0" v-html="description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  
    title: {
      type: [Object, String],
      required: true,
     
    },
    description: {
      type: String,
      default: "",
    },
   
    value: {
      type: [Object, String, Number],
      required: true,
    
    },
   
    icon: {
      type: [String, Object],
     
     
    },
    
  },
};
</script>

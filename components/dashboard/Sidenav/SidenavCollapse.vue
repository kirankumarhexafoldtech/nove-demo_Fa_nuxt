<template>
    <div>

        <a
          class="nav-link"
        >
          <div
            class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
          >
            <slot name="icon"></slot>
          </div>
          <span
            class="nav-link-text"
            :class="$store.state.isExpanded ? ' me-1' : 'ms-1 d-none'"
            >{{ navText }}</span
          >
        </a>
        <!-- <div :class="isExpanded ? 'collapse show' : 'collapse'">
          <slot name="list"></slot>
        </div> -->
    </div>
  </template>
  <script>
  
  export default {
    name: "SidenavCollapse",
    props: {
      collapseRef: {
        type: String,
        required: true
      },
      navText: {
        type: String,
        required: true
      },
      collapse: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isExpanded: false
      };
    }
  };
  </script>
  
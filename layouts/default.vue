<template >
  <div>
    <div v-if="$device.isDesktop">
      <desktop-header />
      <div class="container">
        <div class="row" style="margin: 0;">
          <div class="col-2"></div>
          <div class="col-10 content_desktop">
            <nuxt />
          </div>
        </div>
      </div>
      <desktop-footer />
    </div>
    <div v-else>
      <mobile-header />
      <nuxt />
      <mobile-footer />
    </div>
  </div>
</template>
<script>
import MobileHeader from "~/components/Header/MobileHeader.vue";
import MobileFooter from "~/components/Footer/MobileFooter.vue";
import DesktopHeader from "~/components/Header/DesktopHeader.vue";
import DesktopFooter from "~/components/Footer/DesktopFooter.vue";
export default {
  components: {
    MobileHeader,
    MobileFooter,
    DesktopHeader,
    DesktopFooter
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
  background-color: #E9EDF0;
}
</style>

<template>
    <div class="bodyOverlay">
        <div id="wrapper" class="d-flex flex-column">
            <header class="header-global">
        <app-header> :color-on-scroll="0"></app-header>
            </header>
            <main class="flex-fill position-relative" style="margin-top: 11%">
            <nuxt />
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from "~/components/arielle-cerini/AppHeader";

export default {
  components: {
AppHeader  }
};
</script>

<style scoped>

.main{
    background: transparent; 
    background-color: transparent; 
}
</style>
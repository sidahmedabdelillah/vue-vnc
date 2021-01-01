<template>
  <v-app>
    <!-- <topBar /> -->
    <v-btn class="mybtn mx-2" fab dark small color="pink">
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>
    <router-view />
  </v-app>
</template>

<script>
// import topBar from '@/components/topBar';
export default {
  components: {
    // topBar
  },
};
</script>

<style scoped>
.mybtn {
  position: absolute;
  top: 30px;
  left: 30px;
}
</style>

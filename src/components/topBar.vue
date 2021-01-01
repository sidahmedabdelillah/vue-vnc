<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#scrolling-techniques-2"
    max-height="50"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <v-btn @click="back" icon>
      <v-icon> mdi-arrow-left</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'topBar',
  methods: {
    back() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

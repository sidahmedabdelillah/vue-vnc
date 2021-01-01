<template>
  <v-main class="mt-16 pa-10">
    <v-container class="grey lighten-5 mb-6">
      <v-row>
        <v-col v-for="(pc, index) in getAllPC" :key="pc.ip" col="12" md="6"
          ><pc-card
            :password="pc.password"
            :index="index"
            :pcname="pc.pcname"
            :ip="pc.ip"
        /></v-col>
        <v-col col="12" md="6"><add-card class="my-10"></add-card></v-col>
        <v-spacer></v-spacer>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

import pcCard from '@/components/pcCard';
import addCard from '@/components/addCard';

export default {
  name: 'App',

  components: {
    pcCard,
    addCard,
  },
  computed: {
    datp() {
      return 6;
    },

    ...mapGetters(['getAllPC']),
  },

  data: () => ({
    //
  }),
};
</script>

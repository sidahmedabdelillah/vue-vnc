<template>
  <v-card class="mx-auto pa-5" max-width="344">
    <v-spacer></v-spacer>
    <v-btn @click="del" class="mx-2" fab dark x-small color="error">
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>
    <v-img class="mx-10" :src="this.img"></v-img>

    <v-card-title>
      {{ pcname }}
    </v-card-title>

    <v-card-subtitle>
      {{ ip }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="conn" color="blue  lighten-2" class="mx-auto" text>
        Connect<v-icon>mdi-cast</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['pcname', 'ip', 'password', 'index'],
  data: () => ({
    img:
      'https://icons.iconarchive.com/icons/vexels/office/1024/desktop-icon.png',
  }),
  methods: {
    conn() {
      const url = `ws://${this.ip}:9999/tightvnc`;
      this.$router.push({
        name: 'novnc',
        params: {
          url: url,
          passwd: this.password,
        },
      });
    },
    del() {
      this.$store.dispatch('removePcAction', this.index);
    },
  },
};
</script>

<style></style>

<template>
  <div class="">
    <div
      @click="display"
      v-if="!disp"
      class=" pa-16 d-flex justify-center add-ion"
    >
      <v-img
        max-width="150"
        class="mx-10 add-ion"
        src="../assets/add.png"
      ></v-img>
    </div>
    <v-card v-else class="mx-auto pa-5" max-width="344">
      <v-form>
        <v-text-field v-model="pcname" label="Nom Du PC" required>
        </v-text-field>
        <v-text-field v-model="ip" label="Adress Ip" required> </v-text-field>
        <v-text-field
          v-model="password"
          label="Mot De Pass"
          required
          type="password"
        >
        </v-text-field>
        <v-btn @click="ajouter" depressed color="primary">
          Ajouter
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    display() {
      this.disp = true;
    },
    ajouter() {
      const pc = {
        ip: this.ip,
        pcname: this.pcname,
        password: this.password,
      };
      this.$store.dispatch('addNewPc', pc);
    },
  },
  data: () => ({
    img: '../assets/add.png',
    disp: false,
    ip: '',
    pcname: '',
    password: '',
  }),
};
</script>

<style>
.add-ion:hover {
  opacity: 0.9;
  scale: 1.1;
  cursor: pointer;
}
</style>

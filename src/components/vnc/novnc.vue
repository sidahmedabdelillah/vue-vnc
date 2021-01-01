<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>

      <v-btn v-if="disp" @click="connect" class="mt-16">conn</v-btn>
    </v-row>
    <div id="view"></div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb';

export default {
  data() {
    return {
      rfb: null,
      url: this.$route.params.url,
      passwd: this.$route.params.passwd,
      disp: true,
    };
  },

  methods: {
    connect() {
      console.log(this.url);
      console.log(this.passwd);
      this.rfb.sendCredentials({ password: this.passwd });
      this.disp = false;
    },
    disconnect() {
      this.rfb.disconnect();
    },
  },
  beforeDestroy() {
    this.disconnect();
  },
  mounted() {
    this.$nextTick(() => {
      this.rfb = new RFB(this.$el.lastChild, this.url);
      //ws连接上就创建
      //this.rfb.addEventListener("connect",  this.connect());
    });
  },
};
</script>

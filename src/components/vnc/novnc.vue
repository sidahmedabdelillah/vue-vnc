<template>
  <div>
    <button @click="connect">conecter</button>
    <input v-model="ip" />
    <div id="view"></div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb';

export default {
  data() {
    return {
      ip: '',
      rfb: null,
      url: 'ws://192.168.1.21:9999/tightvnc',
      passwd: '12345678',
    };
  },

  methods: {
    connect() {
      console.log(this.url);
      console.log(this.passwd);
      const tmp = `ws://${this.ip}:9999/tightvnc`;
      this.url = tmp;
      this.rfb.sendCredentials({ password: this.passwd });
    },
    back() {
      this.$router.push({ name: 'vnc' });
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

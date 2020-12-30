<template>
  <div>
    <el-row>
      <el-button type="primary" @click="createOne()">Open a VNC</el-button>
    </el-row>
    <el-row>
      <el-card> </el-card>
    </el-row>
    <el-dialog
      title="Enter remote VNC information"
      :visible.sync="dialogFormVisible"
      @close="closeForm"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="RunId:" prop="RunId" required>
          <el-select
            filterable
            v-model="form.RunId"
            placeholder="RunId"
            style="width: 86%;"
          >
            <el-option
              v-for="item in netList"
              :key="item.RunId"
              :label="item.Description"
              :value="item.RunId"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="IP"
          :label-width="formLabelWidth"
          prop="IP"
          required
        >
          <el-input v-model="form.IP" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="Port"
          :label-width="formLabelWidth"
          prop="Port"
          required
        >
          <el-input v-model="form.Port" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="PassWd"
          :label-width="formLabelWidth"
          prop="PassWd"
          required
        >
          <el-input
            v-model="form.PassWd"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeForm">closeForm</el-button>
        <el-button type="primary" @click="openVNC('form')">openVNC</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'vnc',
  computed: {},
  data() {
    return {
      netList: [],
      dialogFormVisible: false,
      form: {
        RunId: '1',
        Port: 5900,
      },
      wsFactory: null,
      formLabelWidth: '70px',
      rules: {
        RunId: [
          {
            required: false,
            message: 'Please select your intranet',
            trigger: 'change',
          },
        ],
        IP: [
          {
            required: true,
            message: 'Please enter the internal network IP',
            trigger: 'blur',
          },
        ],
        Port: [
          {
            required: true,
            message: 'Please enter the intranet port',
            trigger: 'blur',
          },
        ],
        PassWd: [
          {
            required: true,
            message: 'Please enter VNC password',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  created() {
    this.fetchAllNet();
  },
  beforeDestroy() {},
  methods: {
    createOne() {
      this.dialogFormVisible = true;
    },
    openVNC() {
      this.url = this.$wsUrlFactory.createWebsockifyUrl(
        this.form.RunId,
        '192.168.1.85',
        this.form.Port
      );
      this.dialogFormVisible = false;
      console.log(this.url);
      this.$router.push({
        name: 'novnc',
        params: {
          url: this.url,
          passwd: this.form.PassWd,
        },
      });
    },
    closeForm() {
      this.dialogFormVisible = false;
    },
    fetchAllNet() {
      this.$service.fetchAllSessions().then((res) => {
        console.log(res);
        if (res) {
          this.netList = Object.values(res.data);
          this.form.RunId = this.netList[0].RunId;
        } else {
          this.netList = [];
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-top: 10px;
}
</style>

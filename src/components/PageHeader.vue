<template>
  <div class="page">
    <el-menu
      class="nav"
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#2d3664"
      text-color="#c0c4cc"
      active-text-color="#fff"
      :router="true"
    >
      <el-menu-item index="/first">first</el-menu-item>
      <el-menu-item index="/second">second</el-menu-item>
      <el-menu-item index="/third">third</el-menu-item>
    </el-menu>
  </div>
</template>
<script type="text/ecmascript-6">
/**
 * @name 组件名
 * @author your name
 * @description 简单描述
 */

// js
// import assetsIs from "@/assets/js/assetsIs"; //export default
// import { api1, api2 } from "@/assets/js/api"; //export多个
// 公共组件
// import header from "@/components/header";
// 本模块组件
// import dialogCreate from "views/module_name/component/dialogCreate";

export default {
  name: 'Name', // Pascal命名
  components: {},
  props: [],
  data() {
    return {
      activeIndex: '/',
    };
  },
  computed: {},
  watch: {
    $route() {
      this.activeIndex = typeof this.$route.meta !== 'undefined' ? `/${this.$route.meta.activeItem.split('/')[1]}` : '';
    },
  },
  filters: {},
  beforeCreate() {},
  created() {},
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {},
  },
};
</script>
<style scoped>
/* // @import "@/assets/css/common.scss"; */
</style>

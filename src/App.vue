<template>
  <div id="app">
    <el-container>
      <el-header>
        <page-header></page-header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main
          >Main
          <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div> -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import PageHeader from '@/components/PageHeader';
// import PageAside from '@/components/PageAside';

export default {
  name: 'App',
  components: {
    PageHeader,
    // PageAside,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

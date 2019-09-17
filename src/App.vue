<template>
  <div id="app" >
    <el-container>
      <!--style="background-color: beige;line-height: 60px"-->
      <el-header >欢迎来到火影忍者世界</el-header>
      <el-main>
        <router-view/>
      </el-main>

    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>

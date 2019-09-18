<template>
  <div class="hello">

    <div class="index">
    <router-link to="/organize/list">欢迎进入火影</router-link>
    </div>

  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      activeName: 'first'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  color:#000000;
  text-decoration:none;
  background: wheat url("../assets/6.jpg") no-repeat center;
  height: 800px;
}
.index{
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
 }
</style>

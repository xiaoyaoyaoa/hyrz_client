<template>
  <div class="hello">
    <div class="index">
    <router-link to="/organize">点击</router-link>
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
}
.index{
  background: wheat url("../assets/6.jpg") no-repeat center;
  height: 700px;
  border-radius: 5%;
 }
</style>

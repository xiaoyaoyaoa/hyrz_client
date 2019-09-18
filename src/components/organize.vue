<template>
  <div class="hello">

    <el-container>
      <!--style="background-color: beige;line-height: 60px"-->
      <el-header >欢迎来到火影忍者世界</el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="组织管理" name="first">
                <origize v-if="false"></origize>
                <router-view/>
          </el-tab-pane>
        </el-tabs>


      </el-main>

    </el-container>

    <!---->

  </div>
</template>

<script>
  import origize from '@/components/origize'
export default {
  name: 'index',
  data () {
    return {
      activeName: 'first'
    }
  },
  components:{origize},
  methods:{
    handleClick(){
      console.log('0000000000')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

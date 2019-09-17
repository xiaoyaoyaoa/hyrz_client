<template>
  <div class="hello">
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
      <!--<el-breadcrumb-item>组织管理</el-breadcrumb-item>-->

    <!--</el-breadcrumb>-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="组织管理" name="first"><origize></origize></el-tab-pane>
    </el-tabs>

    <router-view></router-view>

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

<template>
  <div class="hello">

    <el-container>
      <!--style="background-color: beige;line-height: 60px"-->
      <el-header id="title">欢迎来到火影忍者世界</el-header>

      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item  v-for="(item,index) in tabList"  :key="index" :to="{path:item.path}">{{item.tabName}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="组织管理" name="组织管理">
                <router-view id="test"/>
          </el-tab-pane>
        </el-tabs>


      </el-main>

    </el-container>


  </div>
</template>

<script>
  import origize from '@/components/origize'
export default {
  name: 'index',
  data () {
    return {
      activeName: '组织管理',
      oid:'',//组织id
      tabList:[{"tabName":'组织管理',"path":'/organize/list'}]//导航
    }
  },
  components:{origize},
  created(){

  },
  watch:{
    '$route'(to,from){
      // console.log(to)
      // console.log(from)
      if(to.name=='olist'){
        let tab={"tabName":'组织管理',"path":'/organize/list'}
       // this.changeTab(tab)
      }else if(to.name=='odetail'){
        let oid=to.params.id
        let tab={"tabName":'组织详情',"path":'/organize/detail/'+oid}
        this.changeTab(tab)
      }else if(to.name=='member'){
        let oid=to.params.id
        let tab={"tabName":'成员管理',"path":'/organize/member/'+oid}
        this.changeTab(tab)
      }else if(to.name=='active'){
        let oid=to.params.id
        let tab={"tabName":'活动管理',"path":'/organize/active/'+oid}
        this.changeTab(tab)
      }
    }
  },
  methods:{
    handleClick(){
      console.log('0000000000')
    },
    changeTab(arg){
      let tb=[{"tabName":'组织管理',"path":'/organize/list'}];
      tb.push(arg);
      this.tabList=tb
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #test{
    background: transparent url("../assets/2.jpg")  no-repeat center ;
    height: 800px;
  }
</style>

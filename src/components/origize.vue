<template>
  <div class="hello">
    <el-table :data="list" style="width:100%">
      <el-table-column prop="organizationId" label="id" width="100"></el-table-column>
      <el-table-column prop="organizationName" label="组织名称" width="100"></el-table-column>
      <el-table-column prop="currentLeader" label="领导" width="100"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)">配置管理</el-button>
          <el-button type="text" @click="handleMember(scope.row)">成员管理</el-button>
          <el-button type="text" @click="handleActive(scope.row)">活动管理</el-button>
        </template>
      </el-table-column>

    </el-table>


  </div>
</template>

<script>
  import http from '@/api/fetch'
  import common from '@/api/common'
export default {
  name: 'index',
  data () {
    return {
      activeName: 'first',
      list:[]
    }
  },
  mounted(){
    let _this=this
    http.fetchGet('/server/index.json').then(function(res){
        // console.log(res)
        _this.list=res.organizationList
    }).catch((e)=>{
      console.log(e)
    })
  },
  methods:{
    handleClick(_row){
      // console.log(_row)
      let oid=_row.organizationId
      this.$router.push({path:'/organize/detail/'+oid})
    },
    handleMember(_row){
      // console.log(_row)
      let oid=_row.organizationId
      this.$router.push({path:'/organize/member/'+oid})
    },
    handleActive(_row){
      let oid=_row.organizationId
      this.$router.push({path:'/organize/active/'+oid})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="hello">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/organize'}">组织管理</el-breadcrumb-item>
      <el-breadcrumb-item>组织详情</el-breadcrumb-item>

    </el-breadcrumb>
    <el-tabs v-model="activeName" @tab-click="handleChange">
      <el-tab-pane label="配置管理" name="second">

        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="组织名称">
              <el-input v-model="form.organizationName"></el-input>
            </el-form-item>
          <el-form-item label="组织首领">
            <el-input  v-model="form.currentLeader"></el-input>
          </el-form-item>
          <el-form-item label="组织公告">
            <el-input  type="textarea" v-model="form.notice"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input  v-model="getStatus"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="text" @click="handleClick()">人员管理</el-button>
            <el-button type="text" @click="handleActive()">活动管理</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
  import http from '@/api/fetch'
  import common from '@/api/common'
export default {
  name: 'index',
  data () {
    return {
      activeName: 'second',
      form:{},
      oid:''//组织id
    }
  },
  computed:{
      getStatus:function(){
        return this.form.status==0?'无效':'有效'
      }
  },
  mounted(){
    let _this=this
    let oid=this.$route.params.id
    this.oid=oid
    http.fetchGet('/server/api/organization/index/'+oid).then(function(res){
        console.log(res)
        _this.form=res.organization
    }).catch((e)=>{
      console.log(e)
    })
  },
  methods:{
    handleChange(){

    },
    handleClick(){
      // console.log(_row)
      // let oid=_row.organizationId
      this.$router.push({path:'/member/'+this.oid})
    },
    handleActive(){
      // let oid=_row.organizationId
      this.$router.push({path:'/active/'+this.oid})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

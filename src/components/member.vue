<template>
  <div class="hello">

            <el-table :data="list">
              <el-table-column prop="memberNick" label="成员昵称"></el-table-column>
              <el-table-column prop="memberJob" label="成员职位"></el-table-column>
              <el-table-column prop="memberType" label="成员类型">
                <template slot-scope="scope">{{memType(scope.row.memberType)}}</template>
              </el-table-column>
              <el-table-column prop="memberStatus" label="成员状态">
                <template slot-scope="scope">{{memStatus(scope.row.memberStatus)}}</template>
              </el-table-column>
              <el-table-column  label="加入时间">
                <template slot-scope="scope">
                {{formatDate(scope.row.memberDate)}}
                </template>
              </el-table-column>
              <el-table-column prop="date" label="操作">
                <template slot-scope="scope">
                  <el-button type="text">战力统计</el-button>
                  <el-button type="text">修改</el-button>
                </template>
              </el-table-column>

            </el-table>


  </div>
</template>

<script>
  import origize from '@/components/origize'
  import http from '@/api/fetch'
  import common from '@/api/common'
  export default {
    name: 'member',
    data () {
      return {
        activeName:'second',
        list:[],
        oragize:{}
      }
    },
    computed:{

    },
    components:{origize},
    mounted(){
      console.log('member------------')
      let _this=this
      let queryId=this.$route.params.id
      http.fetchGet('/server/api/member/list/'+queryId+"/").then(function(res){
        console.log(res)
        _this.list=res.memberList
        _this.oragize=res.organization
      }).catch((e)=>{
        console.log(e)
      })
    },
    methods:{
      handleClick(){
        console.log('0000000000')
      },
     memType:function(_type){
       let t;
       if(_type==0){
         t='离开';
       }else{
         t='存在'
       }
       return t
     },
    memStatus:function(_type){
      let t;
      if(_type==0){
        t='学员';
      }else{
        t='成员'
      }
      return t
    },
      formatDate(_date){
        return common.dateFormat(new Date(_date),'yyyy-MM-dd')
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

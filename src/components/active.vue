<template>
  <div class="hello">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{path:'/organize'}">组织管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table :data="list">
      <el-table-column  label="活动类型">
          <template slot-scope="scope">
            {{actType(scope.row.activityType)}}
          </template>
      </el-table-column>
      <el-table-column  label="活动日期">
        <template slot-scope="scope">
          {{formatDate(scope.row.activityDate)}}
        </template>
      </el-table-column>
      <el-table-column prop="activityName" label="活动名称"></el-table-column>
      <el-table-column prop="date" label="操作">
        <template slot-scope="scope">
          <el-button type="text">编辑</el-button>
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
      let queryId=this.$route.params.id
      http.fetchGet('/server/api/activity/list/'+queryId).then(function(res){
        console.log(res)
        _this.list=res.actList
      }).catch((e)=>{
        console.log(e)
      })
    },
    methods:{
      handleClick(){
        console.log('0000000000')
      },
      actType(_type){
          let t;
          switch (_type) {
            case 0:
              t='战力涨幅';
              break;
            case 1:
              t='本服要塞';
              break;
            case 2:
              t='跨服要塞';
              break;
            case 3:
              t='天地战场';
              break;
            case 4:
              t='本服争霸';
              break;
            case 5:
              t='跨服争霸';
              break;
            case 6:
              t='其他活动';
              break;
            default:
              t='';
          }
          return t;
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

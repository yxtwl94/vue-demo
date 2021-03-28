<template>
  <div id="app">
    <img src="./assets/logo.png" alt="无法显示">
    <el-container>
      <el-button @click="startHacking">Start</el-button>
      <el-button @click="testApi">test api</el-button>
      <el-input v-model="price" placeholder="请输入价格"></el-input>
      <el-button @click="get_house_title">获取房源信息</el-button>
    </el-container>

    <el-container>
      <el-main>
        <el-table :data="houseTable" @row-click="handleTableClick">
          <el-table-column prop="title" label="标题" width="400">
          </el-table-column>
          <el-table-column prop="price" label="价格" width="120">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const api_url = 'http://localhost:3000/api'

export default {
  mounted() {
    this.price = this.$route.query.price
    this.get_house_title()
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    testApi(){
      this.$ajax.get(api_url+'/demo/get',{
        params:{
          name:'yxt',
          age:'25'
        }
      }).then(function (res){
        alert(res.data['name'])
        console.log(res.data)
      })
    },
    get_house_title(){
      var _this = this  //直接用this会失败！
      this.$ajax.get(api_url+'/demo/get_house_title',{
        params:{
          price:this.price, //获取价格数据
        }
      }).then(function (res){
        _this.houseTable = []
        for (var i=0;i<res.data.length;i++)
        {
          var item = {
            title:res.data[i].house_title,
            price:res.data[i].house_price
          }
          //console.log(item)
          _this.houseTable.push(item)
        }
      })
    },
    handleTableClick(event){
      console.log('点击的是:'+event['title']+event['price'])
      this.$router.push({
        path:'/',
        query:{
          price:event['price']+100
        }
      })
    }
  },
  data() {
    return {
      price: '',
      houseTable:[]
    }
  },
  watch :{
    '$route': function (to, from) {
      //执行数据更新查询,重新加载
      location.reload();
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>

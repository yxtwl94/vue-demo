<template>
  <div id="app">
    <img src="./assets/logo.png" alt="无法显示">
    <div>
      <el-button @click="startHacking">Start</el-button>
      <el-button @click="testApi">test api</el-button>
    </div>
  </div>
</template>

<script>
const api_url = 'http://localhost:3000/api'

export default {
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

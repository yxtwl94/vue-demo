<template>
  <div id="fileView">
    <el-container>
      <el-main>
        <div v-for="(item,index) in files">
          <a :href="'src/public/'+(item)">
            <span>{{item}}</span>
          </a>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
const api_url = 'http://localhost:3000/api'

export default {
  mounted() {
    var _this=this
    this.$ajax.get(api_url+'/demo/get_all_files',{
      params:{
        path:'C:\\Users\\yxtwl94\\Desktop\\Project\\vue-demo\\src\\public',
      }
    }).then(function (res){
      console.log(res.data)
      _this.files=res.data
    })
  },
  methods: {
  },
  data() {
    return {
      files:[]
    }
  },
}
</script>
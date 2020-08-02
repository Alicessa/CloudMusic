 <template>
  <div class="Top">
      
      <!-- <img src="~assets/topmao.png" class="topimg">   -->
      <!-- 编程式导航 -->
      <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <!-- 搜索框 -->
        <input
          type="text"
          autocomplete="off"
          placeholder="音乐/视频/电台/用户"
          class="el-input__inner"
          v-model="inputValue"
          @keyup.enter="toresult"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'Top',
 data(){
     return{
      //  拿到输入的内容
        inputValue:"" 
     }
     
 },
 methods:{
   //非空判断
    toresult(){
         if(this.inputValue==''){
            this.$message.warning('请输入内容')
         }
         else{//携带参数
            //  this.$router.push("/result?q=this.inputValue")
             this.$router.push(`/result?q=${this.inputValue}`)
         }
     }
 }

}

</script>

<style scoped>

</style>
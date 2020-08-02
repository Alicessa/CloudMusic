<template>
  <div class="Nav">
    <!--左侧导航-->
 
    <div class="ul-li">
<div class="log"></div>
      <ul class="nav">
        <li class="logab"><span class="wyy">网抑云音乐</span></li>
        <!-- 声明式导航 渲染成为a标签-->
        <li :class="{active:tag=='发现音乐'}"   @click="tag='发现音乐'"><router-link to="/discc">发现音乐</router-link></li>
        <li :class="{active:tag=='推荐歌单'}"   @click="tag='推荐歌单'"><router-link to="/playlists">歌单</router-link></li>
        <li :class="{active:tag=='最新音乐'}"   @click="tag='最新音乐'"><router-link to="/song">最新音乐</router-link></li>
        <li :class="{active:tag=='最新MV'}"   @click="tag='最新MV'"><router-link to="/mvs">最新MV</router-link></li>
      </ul>
    </div>

      <div class="player">
        <!-- autoplay自己动播放 -->
    <audio :src="musicUrl" autoplay controls id="music" class="aut">  </audio>
   <div class="icon"> <img src="~assets/bon.gif"></div>
    </div>
    <!--右侧的容器-->
    <div class="main">
    <router-view/>
    
    </div>
    
  </div>
</template>
<script  scoped>
import discc from 'components/discc'
export default {
 name:'Nav',
 components: {
  discc
 },
 data(){
   return{
    musicUrl:"",
    tag:'发现音乐'
   }
   
 }
}
</script>
<style scoped>
.active{
  background: #000000;
}
.icon{
  position: fixed;
  z-index: 10;
 bottom: 1%;
 left: 17%;
 width: 100px;
 height: 100px;
 opacity: 0.8;
 

}
.icon img{
  width: 100%;
  height: 100%;
  border-radius:5px ;

}


</style>



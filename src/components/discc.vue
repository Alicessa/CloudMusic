<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <!-- <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl"  />
      </el-carousel-item>
    </el-carousel>-->
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">歌单</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in list" :key="index" @click="Musicdetails(item.id)">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{item.copywriter}}</span>
            </div>
            <img :src="item.picUrl" alt />
            <span class="iconfont icon-play">
              <i class="el-icon-video-play"></i>
            </span>
          </div>
          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">最新音乐</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in songs" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" />
            <span @click="playMusic(item.id)" class="iconfont icon-play">
              <i class="el-icon-video-play"></i>
            </span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{item.name}}</div>
            <div class="singer">{{item.song.artists[0].name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in mv" :key="index" @click="toMv(item.id)">
          <div class="img-wrap">
            <img :src="item.picUrl" alt />
            <span class="iconfont icon-play">
              <i class="el-icon-video-play"></i>
            </span>
            <div class="num-wrap">
              <div class="iconfont icon-play">
                <i class="el-icon-video-play"></i>
              </div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.artistName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanner, getPlaylist, getNewsong, getMv,getMusicUrl } from "network/request";

export default {
  name: "discc",
  data() {
    return {
      //轮播图
      banners: [],
      //推荐歌单
      list: [],
      //最新歌曲
      songs: [],
      //推荐mv
      mv: [],
    };
  },
  created() {
    //轮播图接口
    this._getBanner();

    //推荐歌单
    this._getPlaylist();

    //最新音乐
    this._getNewsong();
    //推荐mv
    this._getMv();
  },
  methods: {
    _getBanner() {
      getBanner().then((res) => {
        this.banners = res.data.banners;
      });
    },
    _getPlaylist() {
      getPlaylist().then((res) => {
        this.list = res.data.result;
      });
    },
    _getNewsong() {
      getNewsong().then((res) => {
        this.songs = res.data.result;
      });
    },
    _getMv() {
      getMv().then((res) => {
        this.mv = res.data.result;
      });
    },
    //播放
    playMusic(id) {
      getMusicUrl(id).then(res=>{
      
        if (!res.data.data[0].url) {
        return this.$message.error('该资源为VIP专享，暂不支持播放 ！')
      }
         let url = res.data.data[0].url;
        //设置给父组件的 播放地址
        this.$parent.musicUrl = url;
      })
    },
    //点击歌单详情id
    Musicdetails(id) {
      this.$router.push(`/musicdetails?id=${id}`);
    },
    //去mv详情
    toMv(id) {
      this.$router.push(`/mvdetails?id=${id}`);
    },
  },
};
</script>

<style >
</style>

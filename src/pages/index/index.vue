<template>
  <div class="home">
    <Search></Search>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      indicator-color="#acb4cb"
      indicator-active-color="#fff"
      interval="2000"
      circular
      class="silde"
    >
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <image mode="widthFix" :src="item.image_src" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- 导航栏 -->
    <div class="nav">
      <div v-for="(item,index) in navData" :key=index><img class="nav-img" :src="item.image_src" alt=""></div>
    </div>
    <!-- 楼层 -->
    <div class="floor">
      <div class="item" v-for="(item,index) in floorData" :key=index>
        <div class="title">
          <image :src="item.floor_title.image_src"  mode="aspectFix"></image>
        </div>
        <div class="content">
          <div class="left">
            <image mode="aspectFix" :src="item.product_list[0].image_src"></image>
          </div>
          <div class="right">
            <image v-for="(item1,index1) in item.product_list " :key=index1 v-show="index1!=0" mode="aspectFix" :src="item1.image_src"></image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";

import request from "../../utils/request.js"
export default {
  data() {
    return {
      imgList: [],
      navData:[],
      floorData:[]
    };
  },
  components: {
      Search
  },
  created() {
    request("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata").then(res=>{
      this.imgList=res.data.message
    })
    request("https://www.zhengzhicheng.cn/api/public/v1/home/catitems").then(res=>{
      this.navData=res.data.message
    })
    request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata").then(res=>{
      // console.log(res);
       this.floorData=res.data.message
    })
  }
};
</script>

<style lang="scss">

.slide-image{
  width: 100%;
  height: 100%;
}
.silde{
  height: 340rpx;
}
.nav{
  display: flex;
  justify-content: space-around;
  padding: 20rpx 0;
}
.nav-img{
  width: 120rpx;
  height: 140rpx;
}
.floor{
  .title{
    image{
      height: 84rpx;
    }
  }
  .content{
    display: flex;
    height: 400rpx;
    padding: 15rpx 11rpx;
    .left{
      flex:1;
      // background-color: #0094ff;
      padding: 5rpx;
      image{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      flex: 2;
      // background-color: orange;
      image{
        float: left;
        width: 48%;
        height: 48%;
        padding: 1%;
      }
   }
  }
}
</style>

<template>
<div class="cate">
    <!-- 搜索 -->
    <Search></Search>
    <view class="main">
        <scroll-view scroll-y class="main-left">
            <block v-for="(item,index) in navList" :key=index>
                <view 
                class="main-item" 
                :class="{active:index==tabindex}"
                @tap="handleTap(index)"
                >
                {{item.cat_name}}
                </view>
            </block>
        </scroll-view>
        <scroll-view scroll-y class="main-right">
            <block v-for="(item1,index1) in rightData" :key=index1>
                <view class="floor">
                    <view class="head">{{item1.cat_name}}</view>
                    <view class="body">
                        <block v-for="(item2,index2) in item1.children" :key="index2">
                            <view class="product" @tap="handlTap">
                                <image :src="item2.cat_icon"></image>
                                <view class="text">{{item2.cat_name}}</view>
                            </view>
                        </block>
                    </view>
                </view>
            </block>
        </scroll-view>
    </view>

</div>
</template>

<script>
import Search from "@/components/Search.vue"
import request from "@/utils/request.js"

export default {
    components: {
        Search
    },
    data () {
        return {
            navList:[],
            tabindex:0,
            rightData:[]
        }
    },
    created () {
      request("https://www.zhengzhicheng.cn/api/public/v1/categories").then(res=>{
          this.navList=res.data.message
        //   console.log(res);
          this.rightData=this.navList[0].children;
        //   console.log(this.rightData);
          
      })  
    },
    methods: {
        handlTap(){
            wx.navigateTo({
                url:'/pages/goodsList/main'
            })
        },
        handleTap(index){
            this.tabindex=index
            this.rightData=this.navList[index].children
        }
    }
}
</script>

<style lang="scss">
    .search{
        position: fixed;
        width: 100%;
    }
    .main{
        color: #414141;
        position: fixed;
        top: 100rpx;
        bottom: 0;
        left: 0;
        right:0;
        display: flex;
        .main-left{
            width: 200rpx;
            .main-item{
                height: 90rpx;
                line-height: 90rpx;
                text-align: center;
                border-bottom: 1px solid #f0f0f0;
                background-color: #f5f5f5;
                font-size: 32rpx;
            }
            .active{
                background-color: #fff;
                color: red;
                position: relative;
                &::before{
                    position: absolute;
                    top: 15rpx;
                    left: 0;
                    width: 8rpx;
                    bottom: 15rpx;
                    content: "";
                    background-color: red;
                }
            }
        };
        .main-right{
            flex: 1;
            padding: 10rpx;
            .floor{
                .head{
                    text-align: center;
                    font-size: 34rpx;
                    margin-bottom: 5rpx;
                    margin-top: 10rpx;
                    &::before{
                        content: '/';
                        padding-right:30rpx;
                        color: #e3e3e3;
                    }
                    &::after{
                        content: '/';
                        padding-left:30rpx;
                        color: #e3e3e3;
                    }
                }
                .body{
                    margin-bottom: 10rpx;
                    display: flex;
                    flex-wrap: wrap;
                    .product{
                        width: 33.33%;
                        text-align: center;
                        padding: 10rpx 0;
                        image{
                            height: 100rpx;
                            width: 140rpx;
                        }
                        .text{
                            font-size: 30rpx;
                        }
                    }
                }
            }
        }
    }
</style>

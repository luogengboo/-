<template>
    <!-- 搜索 -->
    <view class="search">
      <div class="search-input" @tap="handleTap">
        <icon class="search-icon" type="search" size="32rpx"></icon>搜索
      </div>
    </view>
</template>
<script>
export default {
    
    methods: {
      handleTap(){
        wx.navigateTo({url:"/pages/search/main"})
      }
    }
}
</script>

<style lang="scss">
.search {
  box-sizing: border-box;
  background-color: #ff2d4a;
  padding: 20rpx 16rpx;
  .search-input {
  height: 60rpx;
  background-color: #fff;
  border-radius: 6rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bbb;
  font-size: 32rpx;
}
}

.search-icon {
  margin-right: 16rpx;
}
</style>


<template>
<div class="right-bar">
  <div class="rightbar-item">
    <div class="avatar-border">
      <img src="../../assets/img/xxx.jpeg" alt="">
      <span class="iconfont icon-jia-tianchong"></span>
    </div>
  </div>
  <div class="item-icon">
    <span class="iconfont icon-aixin"></span>
    <p>15w</p>
  </div>
  <div class="item-icon">
    <span class="iconfont icon-pinglun"></span>
    <p>15w</p>
  </div>
  <div class="item-icon">
    <span class="iconfont icon-fenxiang"></span>
    <p>15w</p>
  </div>
  <div class="rightbar-item">
    <div class="right-music">
      <img src="../../assets/img/xxx.jpeg" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "RightBar"
}
</script>

<style scoped>
 .right-bar{
   width: 80px;

 }
 .right-bar .rightbar-item {
   height: 60px;
   width: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   padding-bottom: 10px;
 }
 .avatar-border {
   height: 50px;
   border: 1px #ffffff solid;
   border-radius: 50%;
   position: relative;
   text-align: center;
 }
 .avatar-border img{
   width: 49px;
   height: 49px;
   border-radius: 50%;
 }
 .avatar-border .icon-jia-tianchong {
      color: #FE2C5A;
      position: absolute;
      top: 35px;
      left: 0;
      right: 0;

 }
 .right-bar .item-icon {
   height: 60px;
   text-align: center;
   padding-top: 12px;
 }
 .item-icon .iconfont {
   color: #ffffff;
   font-size: 30px;

 }
 .item-icon p {
   color: #ffffff;
   font-size: 14px;
    padding-top: 5px;
 }
 .rightbar-item .right-music {
   margin-top: 5px;
   height: 54px;
   width: 54px;
   background: #2e2e2e;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: round 6s 0s linear infinite;
 }
 .right-music img{
   height: 30px;
   width: 30px;
   border-radius: 50%;
 }
 @keyframes round {
   0%{
     transform: rotate(0deg);
   }
   100%{
     transform: rotate(360deg);
   }
 }
</style>

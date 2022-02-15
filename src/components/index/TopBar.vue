<template>
<div class="top_bar">
    <div class="left">
      <span class="iconfont icon-live">

      </span>
    </div>
  <div class="middle">
    <div class="item"><span :class="topIndex===0 ?'active':''" @click="change(0)">同城</span></div>
    <div class="item"><span :class="topIndex===1 ?'active':''"  @click="change(1)">关注</span></div>
    <div class="item"><span :class="topIndex===2 ?'active':''"  @click="change(2)">推荐</span></div>
  </div>
  <div class="right">
      <span class="iconfont icon-sousuo">

      </span>
  </div>

</div>
</template>

<script>
export default {
  name: "TopBar",
  data(){
    return{
      topIndex:0
    }
  },
  methods:{
    change(index) {
      this.topIndex=index
    }
  }

}
</script>

<style scoped>

.top_bar{
  position: fixed;
  /*background-color: #cccccc;*/
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #cccccc;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  z-index: 999;
}
.left,.right{
  width: 20%;
}
.iconfont{
  font-size: 24px;
}
.middle {
  width: 60%;
  display: flex;
  justify-items: center;

}
.middle .item span{
    padding: 5px 0;
}
.middle  .item .active {
  color: #ffffff;
  border-bottom: 3px solid #ffffff;
}
.middle .item{
  flex: 1;
  text-align: center;
}
.right {
  text-align: right;
}
</style>

<template>
<div class="tab_bar">
  <div class="item" @click="change(0)" >
    <router-link to="/index" tag="span" :class="tabIndex===0 ? 'active':''" >
      首页
    </router-link>
  </div>
  <div class="item" @click="change(1)">
    <router-link to="/follow" tag="span" :class="tabIndex===1 ? 'active':''">
      熟人
    </router-link>
  </div>
  <div class="item" @click="change(2)">
    <router-link to="/index" tag="span" :class="tabIndex===2 ? 'active':''">
    <img class="dy_btn" src="../../assets/img/add.png" alt="">
    </router-link></div>
  <div class="item" @click="change(3)">
    <router-link to="/index" tag="span" :class="tabIndex===3 ? 'active':''">
      消息</router-link>
  </div>
  <div class="item" @click="change(4)">
    <router-link to="/index" tag="span" :class="tabIndex===4 ? 'active':''">
      我
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "TabBar",
  data (){
    return {
      tabIndex:0
    }
  },
  methods:{
    change(index){
      this.tabIndex=index
    }
  }
}
</script>

<style scoped>
  .tab_bar{
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #000;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #cccccc;
    font-size: 16px;
    display: flex;
    justify-items: center;
    z-index: 999;
  }

  .tab_bar .item{
    flex: 1;
    text-align: center;
  }
  .tab_bar .item .active {
    color: #fff;
  }
  /*.tab_bar .item .span{*/
  /*  padding: 10px 50;*/
  /*}*/
  .tab-bar>img{
    padding:2.5px;
  }
</style>

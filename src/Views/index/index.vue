<template>
<div class="indexwarp">
  <TopBar></TopBar>
  <router-view ></router-view>
</div>
</template>

<script>
import TopBar from "@/components/index/TopBar";
export default {
  name: "index",
  components:{
    TopBar
  }
}
</script>

<style scoped>
.indexwarp{
  height: 100%;
  background: black;
}

</style>

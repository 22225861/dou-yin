<template>
  <div class="home">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/home/TabBar";
export default {
  name: "Home",
  data(){
    return {

    }
  },
  components:{
    TabBar
  }

}
</script>

<style scoped>

</style>

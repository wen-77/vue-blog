<!-- App.vue可當作根實體看待，但其實他也只是component而已 -->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- 綁定props的msg -->
    <!-- test是data名稱 -->
    <!-- <HelloWorld :msg="test"></HelloWorld> -->
    <Header />
    <router-view /> 
    <!-- <Footer /> -->
  </div>
</template>

<script>
// 引入"HelloWorld"的component
// @->表示會自動鎖定"src"的資料夾
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import PostList from '@/components/PostList'


  export default {
    mounted(){
      this.$store.dispatch('fetchArticles')
    },
    components:{
      Header,
      Footer,
      PostList,
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

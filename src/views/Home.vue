<template>
  <div class="container-fluid d-inline-flex justify-content-center">
    <div class="col-7 d-flex flex-wrap">
      <!-- 會依照搜尋調用文章，缺點是剛進入Home頁時，搜尋是空值 -->
      <article class=" col-6 mt-5" v-for="(art,index) in filterBySearchKey" :key="index">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
          class="mb-2">
          <h3>{{art.title | subTitle}}</h3>
          <b-card-text class="mb-3">
            <p class="text-right m-0"><i>{{art.date | toDate}}</i></p>
            <span>{{art.content | subContent}}</span>
          </b-card-text>
          <b-button @click="routerToArticle(art.id)" variant="dark">閱讀更多</b-button>
        </b-card>
      </article>
    </div>
    <PostList />

  </div>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex';
  import PostList from '@/components/PostList'

  export default {
    name: "Home",
    methods: {
      routerToArticle: function (id) {
        //name放要切換過去的路由名稱
        this.$router.push({
          name: "Article",
          params: {
            id: id
          }
        })
      }
    },
    computed: {
      ...mapState(['articles']),
      ...mapGetters(['filterBySearchKey']),
    },
    filters: {
      subTitle: (title) => {
        return title.substring(0, 10) + "..."
      },
      subContent: (content) => {
        return content.substring(0, 75) + "..."
      },
      // timestamp=時間戳(既定寫法),getFullYear()=抓取西元年,getMonth()=抓取月份(0~11),getDate()=抓取1~31
      toDate: (timestamp) => {
        const date = new Date(timestamp)
        let Y = date.getFullYear();
        let M = date.getMonth();
        let D = date.getDate();
        let H = date.getHours();
        let Min = date.getMinutes();
        return `${Y}/${M + 1}/${D} ${H}:${Min}`;
      }
    },
    components: {
      PostList
    }
  }
</script>
<style lang="scss" scoped>
  // .home {
  //   display: flex;
  //   flex-wrap: wrap;
  // }
</style>
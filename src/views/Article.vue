<template>
  <div class="container">
    <article class="col-10 mx-auto mt-4">
      <h1>{{ filterById.title }}</h1>
      <p><i>{{filterById.date | toDate}}</i></p>
      <span v-html="filterById.content"></span>
    </article>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted() {
      //拿到參數Id，把Id重新命名為artId
      const id = this.$route.params.id
      this.artId = id
      this.$store.dispatch('changeFocusId', id)
    },
    data() {
      return {
        artId: null,
        articles: []
      }
    },
    computed: {
      ...mapGetters(['filterById'])
      // filterById: function () {
      //   return this.articles.filter(art => art.id === this.artId)[0]
      // }
    },
    filters: {
      subContent: (content) => {
        return content.substring(0, 50) + "..."
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
    }
  }
</script>
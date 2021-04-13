<template>
  <div>
    <!-- :fields="table樣式" :items="內容來源" -->
    <b-table small :fields="fields" :items="articles" responsive="sm">
      <template #cell(編號)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(date)="data">
        {{ data.value | toDate }}
      </template>
      <!-- <template #cell(banner))="data">
        {{ data.value | toImg }}
      </template> -->
      <template #cell(content)="data">
        {{ data.value | subContent }}
      </template>
      <template #cell(id)="data">
        <b-button-group>
          <b-button @click="editArticle(data.value)"><b-icon icon="pencil"></b-icon> 修改</b-button>
          <b-button @click="delArticle(data.value)"><b-icon icon="x-circle"></b-icon> 刪除</b-button>
        </b-button-group>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapState,  mapActions } from 'vuex'

  export default {
    data() {
      return {
        fields: [
          '編號',
          { key: 'title', label: '標題' },
          { key: 'date', label: '上傳日期' },
          // { key: 'banner', label: '文章縮圖' },
          { key: 'content', label: '文章內容' },
          { key: 'id', label: '修改/刪除' },
        ]
      }
    },
    methods: {
      // 放入Function名稱
      ...mapActions(['fetchArticles','deleteArticle']),
      editArticle: function (id) {
        this.$router.push( { name: "Admin-Edit",params: { id: id } } )
      },
      delArticle: function (id) {
        const ensure = confirm("請問是否要刪除這篇文章？")
        if ( ensure ) {
          this.deleteArticle( id )
        }
}
    },
    filters: {
      subContent: (content) => {
        return content.substring(0, 30) + "..."
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
      },
      // toImg:() =>{
      //   const img = new Img()
      //   let img = document.images.length;
      // }
    },
    computed: {
      // 放入Data名稱
      ...mapState(['account', 'articles'])
    }
  }
</script>
<style lang="scss">
  th,.btn-group{
    word-break: keep-all;
  }
</style>
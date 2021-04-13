<template>
  <div>
    <h1>新增文章</h1>
    <b-form>
      <b-form-group id="input-group-1" label="文章標題：" label-for="input-1">
        <b-form-input id="input-1" v-model="formData.title" type="text" required placeholder="文章標題"></b-form-input>
      </b-form-group>
      <!-- <b-form-group id="input-group-2" label="上傳日期：" label-for="input-2">
        <div>
          <b-form-datepicker id="datepicker-placeholder" placeholder="選擇日期" v-model="formData.date" class="mb-2">
          </b-form-datepicker>
        </div>
      </b-form-group> -->
      <b-form-group id="input-group-1" label="文章內容：" label-for="input-1">
        <b-form-textarea id="textarea" v-model="formData.content" placeholder="輸入文章內容..." rows="10" max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button class="mr-3" v-if="!submited" @click.prevent="submitFormData" type="submit" variant="primary">送出</b-button>
      <b-button v-if="!submited" @click.prevent="resetFormData" variant="danger">重置</b-button>
      <b-spinner v-else label="Spinning"></b-spinner>
    </b-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters,  mapState } from 'vuex'

  export default {
    mounted() {
      // 判定按"修改"時，是新增還是修改
      if (this.$route.name === "Admin-Edit") {
        const id = this.$route.params.id
        this.mode = 'edit'
        this.$store.dispatch('changeFocusId', id)
      }
    },
    data() {
      return {
        mode: "add",
        formData: {
          title: "",
          date: "",
          content: ""
        },
        // 等待轉圈圈
        submited:false,
      }
    },
    methods: {
      ...mapActions(['addArticle', 'updateArticle']),
      // 重置程式=恢復成沒有資料時的data狀態
      resetFormData: function () {
        this.formData = {
          title: "",
          date: "",
          content: ""
        }
      },
      // 送出=文章列表看得見新增的文章，且取得上傳的時間
      submitFormData: function () {
        this.submited = true
        this.formData.date = new Date().getTime()
        if (this.mode === 'edit') {
          this.updateArticle({
            id: this.$route.params.id,
            newArticle: this.formData
          })
        } else {
          this.addArticle(this.formData).then(id => {
            console.log(id)
            this.$router.push( { name: 'Admin-Home' } )
          })
        }
      }
    },
    computed: {
      // ...mapState(['articleChanged']),
      ...mapGetters(['filterById']),
    },
    watch: {
      filterById: function () {
        this.formData.title = this.filterById.title
        this.formData.content = this.filterById.content
      },
      // articleChanged: function () {
      //   this.$router.push( { name: 'Admin-Home' } )
      // }
    }
  }
</script>
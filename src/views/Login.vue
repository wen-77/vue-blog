<template>
  <div class="container mt-5">
    <h1 class="text-center">管理員登入</h1>
    <b-form class="col-6 mx-auto">
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.account"
          type="text"
          required
          placeholder="Enter Account"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="輸入登入密碼"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button
        class="mt-2"
        @click.prevent="routerToAdmin"
        type="submit"
        variant="primary"
      >登入</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: "",
          password: ""
        }
      };
    },
    methods: {
      routerToAdmin: function() {
        this.$router.push({ name: "Admin-Home" });
      }
    }
  };
</script>
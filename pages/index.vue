<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" autofocus />
    </div>
    <div>
      <input
        v-model="password"
        :type="visible ? 'text' : 'password'"
        @keyup.enter="handleLogin"
      />
      <Icon
        :name="visible ? 'show' : 'hide'"
        className="m-login-icon"
        @onClick="handleVisible"
      ></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import urls from '../utils/urls'

export default {
  head: {
    title: "小米书城-登录",
    meta: [
      { hid: "description", name: "description", content: "小米书城登录页" },
      { hid: "Keywords", name: "Keywords", content: "小米书城,登录" }
    ]
  },
  data() {
    return {
      username: "admin",
      password: "123456",
      visible: false
    };
  },
  methods: {
    handleVisible() {
      this.visible = !this.visible;
    },
    handleLogin() {
      this.$axios.post(urls.light.login, { username: this.username, password: this.password })
        .then(res => {
          if (res.code === 200) {
            this.$router.push('/light/home/Home')
            localStorage.setItem('token', res.data.username)
          }
        });
    }
  }
};
</script>

<style></style>

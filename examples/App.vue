<template>
  <div id="app">
    <sh-test></sh-test>

    <div @click="start">开始</div>
    <div @click="end">结束</div>
    <div @click="error">错误</div>
  </div>
</template>

<script>

  export default {
      name: 'app',
      components: {

      },
      methods: {
          start () {
              this.$loadingBar.start()
          },
          end () {
              this.$loadingBar.end()
          },
          error () {
              this.$loadingBar.error()
          }
      }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

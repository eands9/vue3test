<template>
  <div class="home">
    <SendMail />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SendMail from '@/components/SendMail.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, SendMail
  }
}
</script>

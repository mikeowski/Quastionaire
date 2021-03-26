<template>
  <div class="welcome">
    <b-container class="main-wrapper">
      <b-navbar class="header">
        <b-col class="text-center">
          <typical
            class="brandName"
            :steps="[500, '?', 2000, 'Quastionaire']"
            :wrapper="'h1'"
          ></typical>
        </b-col>
      </b-navbar>
      <b-row>
        <b-col>
          <b-container>
            <starter />
          </b-container>
        </b-col>
      </b-row>
      <b-navbar fixed="bottom">
        <b-nav-item disabled>
          <b-col>
            <typical
              class="helloType"
              :steps="[
                '{',
                1000,
                '{Hello world!',
                500,
                '{Hello world! This is',
                100,
                '{Hello world! This is Burak}',
                1000
              ]"
              :loop="Infinity"
              :wrapper="'div'"
            ></typical>
          </b-col>
        </b-nav-item>

        <b-nav-item class="ml-auto" disabled>
          <b-col class="text-right">Made By Burak Mike ©</b-col>
        </b-nav-item>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import typical from 'vue-typical'
import Starter from '@/components/inComponents/starter'
export default {
  components: {
    Starter,
    typical
  }
}
</script>
<style>
.header {
  height: 100px;
}

.brandName {
  color: whitesmoke;
}

.helloType {
  color: #58c393;
}

.main-wrapper {
  height: 100vh;
}

.welcome {
  background-color: #181a1b;
}
</style>

<template>
  <div class="welcome">
    <b-container class="main-wrapper">
      <b-navbar class="header">
        <b-col class="text-center">
          <typical
            class="brandName"
            :steps="[
              1000,
              'Welcome 👋',
              1500,
              'Are you Ready?',
              1000,
              'Quastionaire'
            ]"
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
      <b-navbar class="navBot" fixed="bottom">
        <b-nav>
          <b-col
            ><b-link class="text-light" href="https://github.com/MahykBurak"
              >My github page</b-link
            >
          </b-col>
        </b-nav>
        <b-nav class="ml-auto" disabled
          ><b-col class="text-right"
            ><typical
              class="helloType"
              :steps="[
                ' ',
                500,
                '{',
                1000,
                '{Made',
                500,
                '{Made by',
                100,
                '{Made by Burak Mike ©}',
                1000
              ]"
              :loop="Infinity"
              :wrapper="'div'"
            ></typical
          ></b-col>
        </b-nav>
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
  color: navajowhite;
}

.main-wrapper {
  height: 100vh;
}

.welcome {
  background-color: #242C3A;
}
.navBot {
  margin-bottom: 2px;
}
</style>

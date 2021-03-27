<template>
  <div class='Question'>
    <b-container class='main-wrapper'>
      <b-navbar class='header'>
        <b-col class='text-center'>
          <typical
            class='brandName'
            :steps="[
              500,'?',1500,
              'Quastionaire'
            ]"
            :wrapper="'h1'"
          ></typical>
        </b-col>
      </b-navbar>
      <b-row>
        <b-col>
          <b-container>
            <question-box />
          </b-container>
        </b-col>
      </b-row>
      <b-navbar class='navBot' fixed='bottom'>
        <b-nav>
          <b-col
          >
            <b-link class='text-light' href='https://github.com/MahykBurak'
            >My github page
            </b-link
            >
          </b-col>
        </b-nav>
        <b-nav class='ml-auto' disabled
        >
          <b-col class='text-right'
          >
            <typical
              class='helloType'
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
              :loop='Infinity'
              :wrapper="'div'"
            ></typical
            >
          </b-col>
        </b-nav>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import typical from 'vue-typical'
import QuestionBox from '@/components/inComponents/questionBox'

export default {
  components: {
    QuestionBox,
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

.Question {
  background-color: #181a1b;
}

.navBot {
  margin-bottom: 2px;
}
</style>

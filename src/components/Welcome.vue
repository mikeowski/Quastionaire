<template>
  <div>
    <b-row align-v="center">
      <b-col sm="2" align-self="center">
        <typical
          class="helloType"
          :steps="[
            'Hello',
            1000,
            'Hello world!',
            500,
            'Hello world! This is',
            100,
            'Hello world! This is Burak',
            1000
          ]"
          :loop="Infinity"
          :wrapper="'h1'"
        ></typical>
      </b-col>

      <b-col sm="10" align-self="center">
        <b-container>
          <b-jumbotron
            class="jumbotron"
            header="BootstrapVue"
            lead="Bootstrap v4 Components for Vue.js 2"
          >
            <p>For more information visit website</p>
            <b-button variant="primary" href="#">More Info</b-button>
          </b-jumbotron>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import typical from 'vue-typical'

export default {
  components: {
    typical
  }
}
</script>
<style>
body {
  background-color: #151a23;
}
.helloType {
  color: #58c393;
}
</style>

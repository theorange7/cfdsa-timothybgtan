<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import QuoteComponent from './components/HelloWorld.vue'

export default {
  components: {
    QuoteComponent
  },
  data() {
    return {
      quote: {}
    }
  },
  methods: {
    getQuotes() {
      fetch('https://5ol4mkjqi2eb6dfh4sdac6hxla0spkqc.lambda-url.ap-southeast-1.on.aws/api')
      .then(resp => resp.json())
      .then(data => this.quote = data.message)
    }
  },
  mounted() {
    this.getQuotes();
  }
}

</script>

<template>
  <QuoteComponent :quote="quote" />
  <div class="card">
    <p>
      Repository <a href="https://github.com/theorange7/precourseassignment">https://github.com/theorange7/precourseassignment</a>
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

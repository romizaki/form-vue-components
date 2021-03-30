<template>
  <div class="home container">
    <div>
      <p class="h1">Hello World!</p>
    </div>
    <div class="card d-flex flex-column bd-highlight">
      <form>
        <Display/>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Display from '../components/Display.vue'

export default {
  name: 'Home',
  components: {
    Display
  }
}

</script>

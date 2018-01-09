<template>
  <div id="app">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      message: 'hello vue!'
    }
  }
}
</script>

<style>
html {
  font-size: 16px;
}
</style>

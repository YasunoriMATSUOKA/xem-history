<template>
  <div>
    <h2>{{ pageTitle }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelpPage',
  data() {
    return {
      pageTitle: 'ヘルプページ',
    }
  },
})
</script>

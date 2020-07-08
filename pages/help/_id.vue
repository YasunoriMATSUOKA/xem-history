<template>
  <div>
    <h2>{{ pageTitle }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelpIdPage',
  data() {
    return {
      pageTitle: `ヘルプページ ${this.$route.params.id}`,
    }
  },
})
</script>

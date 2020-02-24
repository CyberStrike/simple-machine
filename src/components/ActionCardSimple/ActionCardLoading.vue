<template>
  <card class="bg-primary text-light">
    <div class="card-text d-flex align-items-center justify-content-between">
      Trying to fix thing
      <span class="spinner-border spinner-border-sm" role="status">
         <span class="sr-only">Loading...</span>
      </span>
    </div>
  </card>

</template>

<script>
  import Card from '../Card'
  export default {
    name: 'ActionCardLoading',
    components: { Card }
  }
</script>

<style scoped>

</style>

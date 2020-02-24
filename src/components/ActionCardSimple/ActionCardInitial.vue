<template>
  <card class="bg-warning">
    <div class="card-text d-flex align-items-center justify-content-between">
      Thing need fixing!
      <a @click="$emit('fix-thing')" href="#" class="card-link">Fix The Thing</a>
    </div>
  </card>
</template>

<script>
  import Card from '../Card'
  export default {
    name: 'ActionCardInitial',
    components: { Card }
  }
</script>

<style scoped>

</style>

<template>
  <card class="text-danger">
    <div class="card-text d-flex align-items-center justify-content-between">
      <div class="text-danger">⚠️ Failed To Fix Thing!</div>
      <a @click="$emit('fix-thing')" href="#" class="card-link">Try Again?</a>
    </div>
  </card>
</template>

<script>
  import Card from '../Card'
  export default {
    name: 'ActionCardError',
    components: { Card }
  }
</script>

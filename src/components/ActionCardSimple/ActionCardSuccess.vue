<template>
  <card class="bg-success text-light">
    <div class="card-text d-flex align-items-center justify-content-between">
      <div class="text-light"><span>✓</span> Thing has been fixed!</div>
      <a @click="$emit('reset')" href="#" class="card-link text-dark">Reset</a>
    </div>
  </card>
</template>

<script>
  import Card from '../Card'
  export default {
    name: 'ActionCardSuccess',
    components: { Card }
  }
</script>

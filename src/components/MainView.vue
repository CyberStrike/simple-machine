<template>
  <div id="Main bg-dark">
    <div class="container">
      <div class="col col-md-6 mx-auto">
        <div class="my-2">
          <action-card/>
        </div>
        <div class="my-2">
          <action-card-simple/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionCard from './ActionCard'
import ActionCardSimple from './ActionCardSimple'

export default {
  name: "Main",
  components: { ActionCard, ActionCardSimple }
};
</script>

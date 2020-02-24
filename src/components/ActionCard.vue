<template>
  <div>
    <template v-if="initial">
      <card class="bg-warning">
        <div class="card-text d-flex align-items-center justify-content-between">
          Thing need fixing!
          <a @click="fixThing" href="#" class="card-link">Fix The Thing</a>
        </div>
      </card>
    </template>

    <template v-if="loading">
      <card class="bg-primary text-light">
        <div class="card-text d-flex align-items-center justify-content-between">
          Trying to fix thing
          <span class="spinner-border spinner-border-sm" role="status">
           <span class="sr-only">Loading...</span>
          </span>
        </div>
      </card>
    </template>

    <template v-if="success">
      <card class="bg-success text-light">
        <div class="card-text d-flex align-items-center justify-content-between">
          <div class="text-light"><span>✓</span> Thing has been fixed!</div>
          <a @click="transitionToBase" href="#" class="card-link text-warning">Reset</a>
        </div>
      </card>
    </template>

    <template v-if="error">
      <card class="text-danger">
        <div class="card-text d-flex align-items-center justify-content-between">
          <div class="text-danger">⚠️ Failed To Fix Thing!</div>
          <a @click="fixThing" href="#" class="card-link">Try Again?</a>
        </div>
      </card>
    </template>

  </div>
</template>

<script>
  import Card                 from './Card'
  import { fixThingEndpoint } from '../api'

  export default {
    name: 'ActionCard',
    components: { Card },
    data: () => ({
      loading: false,
      success: false,
      error: false
    }),
    computed: {
      initial () {
        return !this.loading && !this.success && !this.error
      }
    },
    methods: {
      transitionToBase () {
        this.loading = false
        this.success = false
        this.error =  false
      },
      transitionToLoading () {
        this.loading = true
        this.success = false
        this.error =  false
      },
      transitionToSuccess () {
        this.success = true
        this.loading = false
        this.error =  false
      },
      transitionToError () {
        this.error =  true
        this.success = false
        this.loading = false
      },
      async fixThing () {
        try {
          this.transitionToLoading()
          await fixThingEndpoint()
          this.transitionToSuccess()
        } catch (e) {
          this.transitionToError()
          console.log(e)
        }
      }
    }
  }
</script>

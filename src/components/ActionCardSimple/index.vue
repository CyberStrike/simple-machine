<template>
  <component :is="actionCardComponent" v-on="eventHandler"/>
</template>

<script>
  import Card                 from '../Card'
  import { fixThingEndpoint } from '../../api'
  import ActionCardInitial    from './ActionCardInitial'
  import ActionCardLoading    from './ActionCardLoading'
  import ActionCardError      from './ActionCardError'
  import ActionCardSuccess    from './ActionCardSuccess'

  const STATES = {
    initial: 'initial',
    loading: 'loading',
    success: 'success',
    error: 'error'
  }

  export default {
    name: 'ActionCard',
    data: () => ({
      state: 'initial'
    }),
    components: { ActionCardSuccess, ActionCardError, ActionCardLoading, ActionCardInitial, Card },
    computed: {
      actionCardComponent () {
        return 'action-card-' + this.state
      },
      eventHandler () {
        // V-ON Expects an Object
        let vm = this
        return {
          'fix-thing': vm.fixThing,
          reset () {
            vm.state = STATES.initial
          }
        }
      }
    },
    methods: {
      async fixThing () {
        try {
          this.state = STATES.loading
          await fixThingEndpoint()
          this.state = STATES.success
        } catch (e) {
          this.state = STATES.error
        }
      }
    }
  }
</script>

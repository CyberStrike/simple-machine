<template>
  <div>
    <component :is="actionCardComponent" v-on="eventHandler"/>
  </div>
</template>

<script>
  import Card                 from '../Card'
  import { fixThingEndpoint } from '../../api'
  import ActionCardInitial    from './ActionCardInitial'
  import ActionCardLoading    from './ActionCardLoading'
  import ActionCardError      from './ActionCardError'
  import ActionCardSuccess    from './ActionCardSuccess'

  export default {
    name: 'ActionCard',
    components: { ActionCardSuccess, ActionCardError, ActionCardLoading, ActionCardInitial, Card },
    data: () => ({
      showComponent: 'Initial',
    }),
    computed: {
      actionCardComponent () {
        return 'ActionCard' + this.showComponent
      },
      eventHandler () {
        // V-ON Expects an Object
        let vm = this
        return {
          'fix-thing': vm.fixThing,
          reset () {
            vm.showComponent = 'Initial'
          }
        }
      }
    },
    methods: {
      async fixThing () {
        try {
          this.showComponent = 'Loading'
          await fixThingEndpoint()
          this.showComponent = 'Success'
        } catch (e) {
          this.showComponent = 'Error'
          console.log(e)
        }
      }
    }
  }
</script>

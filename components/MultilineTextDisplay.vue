<template>
  <v-textarea :value="text" readonly outlined></v-textarea>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class MultilineTextDisplay extends Vue {
  @Prop({ default: 'text' }) text!: String
}
</script>

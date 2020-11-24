<template>
  <v-text-field
    :value="text"
    readonly
    outlined
    hide-details="auto"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class InlineTextDisplay extends Vue {
  @Prop({ default: 'text' }) text!: String
}
</script>

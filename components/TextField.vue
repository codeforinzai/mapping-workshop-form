<template>
  <inline-form :label="label">
    <v-text-field
      outlined
      :value="value"
      hide-details="auto"
      @input="input"
    ></v-text-field>
  </inline-form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import InlineForm from '@/components/InlineForm.vue'

@Component({ components: { InlineForm } })
export default class TextField extends Vue {
  @Prop({ default: 'text' }) label!: String
  @Prop() value!: String
  @Emit()
  input(e: any) {
    return e as String
  }
}
</script>

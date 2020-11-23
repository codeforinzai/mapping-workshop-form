<template>
  <inline-form :label="label">
    <v-text-field outlined :value="value" @input="input" hide-details="auto"></v-text-field>
  </inline-form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import InlineForm from '@/components/InlineForm.vue'

@Component ({components: { InlineForm }})
export default class TextField extends Vue {
  @Prop({default: "text"}) label!: String;
  @Prop() value!: String;
  @Emit()
  input(e: any) {
    return e as String
  }
}
</script>

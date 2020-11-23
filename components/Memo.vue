<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-subheader><form-label :label="label" /></v-subheader>
        <v-textarea v-model="internalValue" outlined></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormLabel from '@/components/FormLabel.vue'

@Component({ components: { FormLabel } })
export default class Memo extends Vue {
  @Prop({ default: 'メモ' }) label!: String
  @Prop() value!: String
  get internalValue(): String {
    return this.value
  }

  set internalValue(v: String) {
    if (v !== this.value) {
      this.$emit('input', v)
    }
  }
}
</script>

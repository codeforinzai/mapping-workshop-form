<template>
  <v-container>
    <v-row>
      <v-col cols="2" align="right">
        <form-label :label="label" />
      </v-col>
      <v-col cols="10">
        <v-textarea v-model="internalValue" outlined />
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

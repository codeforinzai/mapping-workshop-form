<template>
  <span class="text-subtitle-1">
    {{ label }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class FormLabel extends Vue {
  @Prop({ default: 'label' }) label!: String
}
</script>

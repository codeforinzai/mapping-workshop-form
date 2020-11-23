<template>
  <v-row align="center">
    <v-col cols="3" align="right">
      <form-label :label="label" />
    </v-col>
    <v-col cols="9">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormLabel from '@/components/FormLabel.vue';

@Component ({ components: { FormLabel }})
export default class InlineForm extends Vue {
  @Prop({default: "label"}) label!: String;
}
</script>

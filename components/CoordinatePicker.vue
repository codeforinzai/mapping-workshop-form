<template>
  <v-container>
    <v-row align="center">
      <v-col align="right">
        <form-label label="緯度(いど)" />
      </v-col>
      <v-col>
        <v-text-field
          v-model="internalValue.latitude"
          outlined
          readonly
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col align="right">
        <form-label label="経度(けいど)" />
      </v-col>
      <v-col>
        <v-text-field
          v-model="internalValue.longitude"
          outlined
          readonly
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormLabel from '@/components/FormLabel.vue'

@Component({ components: { FormLabel } })
export default class DatePicker extends Vue {
  @Prop({ default: 'label' }) label!: String
  @Prop({ default: { latitude: 35.8051665, longitude: 140.126533 } })
  value!: Coordinate

  get internalValue(): Coordinate {
    return this.value
  }

  set internalValue(v: Coordinate) {
    if (
      this.value.latitude !== v.latitude ||
      this.value.longitude !== v.longitude
    ) {
      this.$emit('input', v)
    }
  }
}
</script>

<template>
  <v-container>
    <v-row align="center">
      <v-col align="right" cols="2">
        <form-label label="緯度(いど)" />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="internalValue.latitude"
          outlined
          readonly
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col align="right" cols="2">
        <form-label label="経度(けいど)" />
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="internalValue.longitude"
          outlined
          readonly
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <clickable-map v-model="internalValue" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormLabel from '@/components/FormLabel.vue'
import ClickableMap from '@/components/ClickableMap.vue'

@Component({ components: { FormLabel, ClickableMap } })
export default class DatePicker extends Vue {
  @Prop({ default: 'label' }) label!: String
  @Prop()
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

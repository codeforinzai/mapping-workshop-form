<template>
  <inline-form :label="label">
    <v-menu
      v-model="pickerOpened"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="internalValue"
          prepend-inner-icon="mdi-calendar"
          readonly
          outlined
          hide-details="auto"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="internalValue"
        no-title
        @input="pickerOpened = false"
      ></v-date-picker>
    </v-menu>
  </inline-form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'nuxt-property-decorator'
import InlineForm from '@/components/InlineForm.vue'

@Component ({components: { InlineForm }})
export default class DatePicker extends Vue {
  @Prop({default: "label"}) label!: String;
  @Prop({default: new Date().toISOString().substr(0, 10)}) value!: String;
  pickerOpened: boolean = false;
  get internalValue(): String {
    return this.value;
  }
  set internalValue(v: String) {
    if (this.value !== v) {
      this.$emit('input', v);
    }
  }
}
</script>

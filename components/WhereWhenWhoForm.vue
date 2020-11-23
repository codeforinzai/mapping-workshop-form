<template>
  <v-container>
    <text-field v-model="internalWhereValue" :label="'どこで？'" />
    <date-picker v-model="internalWhenValue" :label="'いつ？'" />
    <text-field v-model="internalWhoValue" :label="'だれが？'" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import TextField from '@/components/TextField.vue'
import DatePicker from '@/components/DatePicker.vue'

@Component({ components: { TextField, DatePicker } })
export default class WhereWhenWhoForm extends Vue {
  @Prop() value!: WhereWhenWho
  get internalWhereValue() {
    return this.value.where
  }

  set internalWhereValue(v: String) {
    if (this.value.where !== v) {
      this.$emit('input', {
        where: v,
        when: this.value.when,
        who: this.value.who,
      })
    }
  }

  get internalWhenValue() {
    return this.value.when
  }

  set internalWhenValue(v: String) {
    if (this.value.when !== v) {
      this.$emit('input', {
        where: this.value.where,
        when: v,
        who: this.value.who,
      })
    }
  }

  get internalWhoValue() {
    return this.value.who
  }

  set internalWhoValue(v: String) {
    if (this.value.who !== v) {
      this.$emit('input', {
        where: this.value.where,
        when: this.value.when,
        who: v,
      })
    }
  }
}
</script>

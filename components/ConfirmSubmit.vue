<template>
  <v-container>
    <v-row align="center">
      <v-col cols="2" align="right">
        <form-label label="どこで？" />
      </v-col>
      <v-col cols="10">
        <inline-text-display :text="whereWhenWho.where" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="2" align="right">
        <form-label label="いつ？" />
      </v-col>
      <v-col cols="10">
        <inline-text-display :text="whereWhenWho.when" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="2" align="right">
        <form-label label="だれが？" />
      </v-col>
      <v-col cols="10">
        <inline-text-display :text="whereWhenWho.who" />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="2" align="right">
        <form-label label="緯度(いど)" />
      </v-col>
      <v-col cols="4">
        <inline-text-display :text="coordinate.latitude" />
      </v-col>
      <v-col cols="2" align="right">
        <form-label label="経度(けいど)" />
      </v-col>
      <v-col cols="4">
        <inline-text-display :text="coordinate.longitude" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" align="right">
        <form-label label="メモ"></form-label>
      </v-col>
      <v-col cols="10">
        <multiline-text-display :text="memo" />
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn color="primary" :disabled="!validateInput()" @click="submit"
          >送信</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import FormLabel from '@/components/FormLabel.vue'
import InlineTextDisplay from '@/components/InlineTextDisplay.vue'
import MultilineTextDisplay from '@/components/MultilineTextDisplay.vue'

@Component({
  components: { FormLabel, InlineTextDisplay, MultilineTextDisplay },
})
export default class ConfirmSubmit extends Vue {
  @Prop() whereWhenWho!: WhereWhenWho
  @Prop() coordinate!: Coordinates
  @Prop() memo!: string
  validateInput(): boolean {
    return (
      this.whereWhenWho.where.length > 0 &&
      this.whereWhenWho.who.length > 0 &&
      this.coordinate.longitude !== null &&
      this.coordinate.latitude !== null
    )
  }

  submit() {
    this.$emit('submit')
  }
}
</script>

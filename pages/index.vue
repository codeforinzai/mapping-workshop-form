<template>
  <v-app>
    <v-main app>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="10">
            <v-tabs-items v-model="tab" :touchless="true">
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <where-when-who-form
                      v-model="whereWhenWho"
                    ></where-when-who-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <coordinate-picker v-model="coordinate"></coordinate-picker>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <memo v-model="memo" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab> どこで？いつ？だれが？ </v-tab>
        <v-tab> 緯度・経度 </v-tab>
        <v-tab> メモをかく </v-tab>
      </v-tabs>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WhereWhenWhoForm from '@/components/WhereWhenWhoForm.vue'
import Memo from '@/components/Memo.vue'
import CoordinatePicker from '@/components/CoordinatePicker.vue'

@Component({
  components: { WhereWhenWhoForm, Memo, CoordinatePicker },
})
export default class MappingWorkshopForm extends Vue {
  tab: String = ''
  whereWhenWho: WhereWhenWho = {
    where: '',
    when: new Date().toISOString().substring(0, 10),
    who: '',
  }

  coordinate: Coordinate = {longitude: null, latitude: null};
  memo: String = ''
}
</script>

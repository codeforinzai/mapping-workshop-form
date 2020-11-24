<template>
  <div>
    <div :id="mapId"></div>
    <v-btn depressed color="primary" @click="restoreInitialView">
      元の場所に戻る
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
#map {
  width: 100%;
  min-height: 450px;
}
</style>

<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css' // mapbox 用の CSS

import mapboxgl from 'mapbox-gl'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class ClickableMap extends Vue {
  @Prop({ default: 'map' }) mapId!: string
  @Prop() value!: Coordinate
  @Prop({ default: 13.6 }) defaultZoom!: number
  @Prop({
    default() {
      return { longitude: 140.126533, latitude: 35.8051665 }
    },
  })
  defaultCenter!: Coordinate

  map!: mapboxgl.Map
  point: mapboxgl.Marker | null = null

  mounted() {
    this.createMap()
  }

  createMap() {
    this.map = new mapboxgl.Map({
      container: this.mapId,
      zoom: this.defaultZoom,
      style: {
        version: 8,
        sources: {
          OSM: {
            type: 'raster',
            tiles: [
              'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'OSM',
            type: 'raster',
            source: 'OSM',
            minzoom: 0,
            maxzoom: 18,
          },
        ],
      },
      center: [
        this.value.longitude === null
          ? this.defaultCenter.longitude!!
          : this.value.longitude,
        this.value.latitude === null
          ? this.defaultCenter.latitude!!
          : this.value.latitude,
      ],
    })
    const that = this
    this.map.on('click', function (e: mapboxgl.MapMouseEvent) {
      that.$emit('input', {
        longitude: e.lngLat.lng,
        latitude: e.lngLat.lat,
      })
      that.$nextTick(function () {
        if (that.point === null) {
          that.point = new mapboxgl.Marker({ draggable: true })
            .setLngLat([that.value.longitude!!, that.value.latitude!!])
            .addTo(that.map)
          that.point.on('dragend', function () {
            that.$emit('input', {
              longitude: that.point!.getLngLat().lng,
              latitude: that.point!!.getLngLat().lat,
            })
          })
        } else {
          that.point.setLngLat([that.value.longitude!!, that.value.latitude!!])
        }
      })
    })
  }

  restoreInitialView() {
    this.map.flyTo({
      center: [this.defaultCenter.longitude!!, this.defaultCenter.latitude!!],
      zoom: this.defaultZoom,
    })
  }
}
</script>

<template>
  <vgl-renderer
    camera="box-camera"
    scene="box-scene"
  >
    <vgl-box-geometry name="box" />
    <vgl-scene name="box-scene">
      <vgl-mesh geometry="box" />
    </vgl-scene>
    <vgl-perspective-camera
      name="box-camera"
      orbit-position="3 1 0.5" 
    />
  </vgl-renderer>
</template>

<script>
  import { VglRenderer, VglBoxGeometry, VglScene, VglMesh, VglPerspectiveCamera }  from 'vue-gl';

  export default {
    components: {
      VglRenderer,
      VglBoxGeometry,
      VglScene,
      VglMesh,
      VglPerspectiveCamera
    }
  }
</script>

<style>
</style>

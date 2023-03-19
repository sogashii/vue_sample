<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const src = ref()
  src.value = require('@/assets/sample.mp4')

  const clickBack = () => {
    router.go(-1)
  }
</script>

<template>
  <div :class="$style.videoSample">
    <h1>This is a video-sample page</h1>

    <video controls poster="@/assets/sample.jpg" width="620">
      <source src="@/assets/sample.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <video controls poster="@/assets/sample.jpg" width="620">
      <source :src="src" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>

    <div :class="$style.btnArea">
      <button type="button" class="btn btn-secondary" @click="clickBack">戻る</button>
    </div>
  </div>
</template>

<style lang="scss" module>
  .videoSample {
    margin: 0 20rem;
  }

  .btnArea {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
  }
</style>

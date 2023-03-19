<script setup lang="ts">
  import { computed, ref, watchEffect } from 'vue'
  import { setLocale } from 'yup'
  import { ja } from '@/i18n/yup/ja'
  import SpinnerComponent from '@/components/SpinnerComponent.vue'
  import { useStore } from 'vuex'
  import { registerInterceptors } from '@/utilities/restUtil'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useStore()

  // validationの日本語化
  setLocale(ja)

  // axiosのインターセプタの設定
  registerInterceptors()

  const clickLogout = () => {
    store.dispatch('users/setUser', {})
    router.push({ path: '/login' })
  }

  const isAuthenticated = ref(store.getters['users/isAuthenticated'])
  const isSpinnerOpen = computed(() => store.getters['examples/isGithubUserFetching'])

  watchEffect(() => {
    isAuthenticated.value = store.getters['users/isAuthenticated']
  })
</script>

<template>
  <div :class="$style.header">
    <button v-if="isAuthenticated" class="btn btn-outline-primary" @click="clickLogout">ログアウト</button>
  </div>
  <router-view />
  <SpinnerComponent v-if="isSpinnerOpen" />
</template>

<style lang="scss">
  #app {
    font-family: 'メイリオ';
  }
</style>

<style lang="scss" module>
  .header {
    display: flex;
    justify-content: end;
    padding: 1.5rem;
  }
</style>

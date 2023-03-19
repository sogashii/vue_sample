<template>
  <div :class="$style.menu">
    <h1>menu</h1>
    <nav>
      <div>
        <router-link to="/sample"> sample</router-link>
      </div>
      <div>
        <router-link to="/validation-sample"> validation-sample</router-link>
      </div>
      <div>
        <router-link to="/video-sample"> video-sample</router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" module>
  .menu {
    text-align: center;
  }
</style>

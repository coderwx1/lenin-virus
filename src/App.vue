<template>
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <KeepAlive exclude="NewsInfo">
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style lang="less">
.app-container {
  width: 100%;
  height: 100%;
}
</style>
>

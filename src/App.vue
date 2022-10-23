<template>
  <div class="app-container">
    <!-- <router-view /> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="less">
.home-enter-from {
  transform: translateX(-100%);
}

.home-enter-to {
  transform: translateX(0);
}

.home-enter-active {
  transition: 0.5s ease;
}

.homeList-enter-from {
  transform: translateX(100%);
}

.homeList-enter-to {
  transform: translateX(0);
}

.homeList-enter-active {
  transition: 0.5s ease;
}

.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(237, 241, 243);
}
</style>
>

<template>
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <!-- 过渡组件需要放在keepAlive组件外层，不然缓冲组件的生命周期不执行 -->
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style lang="less">
// .home-enter-from {
//   transform: translateX(-100%);
// }

// .home-enter-to {
//   transform: translateX(0);
// }

// .home-enter-active {
//   transition: 10s ease;
// }

// .newsInfo-enter-from {
//   transform: translateX(100%);
// }

// .newsInfo-enter-to {
//   transform: translateX(0);
// }

// .newsInfo-enter-active {
//   transition: 0.5s ease;
// }

.app-container {
  width: 100%;
  height: 100%;
}
</style>
>

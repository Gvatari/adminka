<template>
    <div class="v-header">
        <div class="v-header-menu">
            <div class="v-header-menu_item" v-for="(menuItem, key) in menu" :key="key"
                @click="handleMenuItemClick(menuItem)">
                {{ menuItem[Object.keys(menuItem)].title }}
            </div>
        </div>
        <div class="v-header-nav">
            <nav v-if="currentMenuItem && currentMenuItem[Object.keys(currentMenuItem)].children">
                <router-link v-for="(nav, key) in currentMenuItem[Object.keys(currentMenuItem)].children" :key="key"
                    :to="nav.url">
                    {{ nav.title }}
                </router-link>
            </nav>
            <router-view />
        </div>
    </div>
</template>
  
<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const currentMenuItem = ref(null);

const menu = computed(() => {
    return store.getters.getMenu;
});

const handleMenuItemClick = (menuItem) => {
    if (!menuItem[Object.keys(menuItem)].children) {
        router.push(menuItem[Object.keys(menuItem)].url);
    } else {
        currentMenuItem.value = menuItem;
    }
};
</script>

<style lang="scss">
.v-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 60px;
    background-color: var(--base-primary);

    &-menu {
        display: flex;
    }

    &-menu_item {
        width: 84px;
        background-color: transparent;
        color: #fff;
        height: 48px;
        font-size: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        padding: 6px 0;
        transition: 0.2s;
    }
}
</style>
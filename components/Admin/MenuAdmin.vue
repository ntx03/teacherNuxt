<script  setup>
const route = useRoute();

const news = ref(false);
const video = ref(false);
const photo = ref(false);
const main = ref(false);

const arrMenu = ref([
    {
        way: '/admin/main',
        text: 'ГЛАВНАЯ',
        onPage: main
    },
    {
        way: '/admin/video',
        text: 'ВИДЕО',
        onPage: video
    },
    {
        way: '/admin/photo',
        text: 'ФОТО',
        onPage: photo
    },
    {
        way: '/admin/news',
        text: 'НОВОСТИ',
        onPage: news
    },
])

if (route.fullPath == "/admin/news") {
    news.value = true;
}
if (route.fullPath == "/admin/main") {
    main.value = true;
}
if (route.fullPath == "/admin/photo") {
    photo.value = true;
}
if (route.fullPath == "/admin/video") {
    video.value = true;
}

watch(route, () => {
    route.fullPath == "/admin/news" ? news.value = true : news.value = false;
    route.fullPath == "/admin/main" ? main.value = true : main.value = false;
    route.fullPath == "/admin/photo" ? photo.value = true : photo.value = false;
    route.fullPath == "/admin/video" ? video.value = true : video.value = false;
})
</script>

<template>
    <div class="parents__menu">
        <ul class="parents__menu-container">
            <HeaderMenuItem :way="item.way" :text="item.text" :onPage="item.onPage" v-for="item in arrMenu" />
        </ul>
    </div>
</template>

<style scoped lang="scss">
.parents__menu {
    max-width: max-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background-color: $grey;
    align-items: center;
    justify-items: center;
    margin: 10px auto 20px auto;
    border-radius: 3px;
    border: 1px solid $grey;

    &-container {
        max-width: max-content;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        text-decoration: none;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
    }
}
</style>
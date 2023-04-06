<template>
    <div className="parents__menu">
        <ul className="parents__menu-container">
            <HeaderMenuItem :way="'/video'" :text="'ПРОФОРИЕНТАЦИЯ'" :onPage="video" />
            <HeaderMenuItem :way="'/videoschool'" :text="'ШКОЛЬНАЯ ЖИЗНЬ'" :onPage="school" />
        </ul>
    </div>
</template>
<script setup>
const route = useRoute();
const video = ref(false);
const school = ref(false);

if (route.fullPath == "/video") {
    video.value = true;
}
if (route.fullPath == "/videoschool") {
    school.value = true;
}

watch(route, () => {
    route.fullPath == "/video" ? video.value = true : video.value = false;
    route.fullPath == "/videoschool" ? school.value = true : school.value = false;
})
</script>
<style lang="scss">
.parents__menu {
    max-width: max-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background-color: #DCDCDC;
    align-items: center;
    justify-items: center;
    margin: 10px auto 30px auto;
    border-radius: 3px;
    border: 1px solid #DCDCDC;

    &-container {
        max-width: max-content;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        list-style-type: none;
        text-decoration: none;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
    }
}
</style>
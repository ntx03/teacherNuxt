<template>
    <div class="parents__menu">
        <div class="parents__menu-container">
            <HeaderMenuItemVideo :way="'/video'" :text="'ПРОФОРИЕНТАЦИЯ'" :onPage="video" />
            <HeaderMenuItemVideo :way="'/videoschool'" :text="'ШКОЛЬНАЯ ЖИЗНЬ'" :onPage="school" />
        </div>
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
<style scoped lang="scss">
.parents__menu {
    display: flex;
    max-width: max-content;
    margin: 0;
    padding: 0;
    gap: 5px;
    display: flex;
    flex-direction: row;
    background-color: $grey;
    align-items: center;
    justify-items: center;
    margin: 10px auto 30px auto;
    border-radius: 3px;
    border: 1px solid $grey;


}

.parents__menu-container {
    max-width: max-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 5px;
    list-style-type: none;
    text-decoration: none;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
}
</style>
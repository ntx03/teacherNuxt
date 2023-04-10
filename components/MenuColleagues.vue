<template>
    <ClientOnly>
        <div class="parents__menu">
            <div class="parents__menu-container">
                <HeaderMenuItem :way="'/colleagues'" :text="'ПОМОЩЬ ПЕДАГОГУ'" :onPage="colleagues" />
                <HeaderMenuItem :way="'/colleagueswork'" :text="'РАБОЧИЕ ПРОГРАММЫ'" :onPage="colleagueswork" />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>
const route = useRoute();
const colleagues = ref(false);
const colleagueswork = ref(false);

if (route.fullPath == "/colleagues") {
    colleagues.value = true;
}
if (route.fullPath == "/colleagueswork") {
    colleagueswork.value = true;
}

watch(route, () => {
    route.fullPath == "/colleagues" ? colleagues.value = true : colleagues.value = false;
    route.fullPath == "/colleagueswork" ? colleagueswork.value = true : colleagueswork.value = false;
})
</script>

<style scoped lang="scss">
.parents__menu {
    width: max-content;
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
    word-wrap: break-word;

}

.parents__menu-container {
    margin: 0;
    padding: 0;
    display: flex;
    //flex-wrap: wrap;
    // flex-direction: row;
    list-style-type: none;
    text-decoration: none;
    margin-right: auto;
    margin-left: auto;
    // justify-content: center;

}
</style>
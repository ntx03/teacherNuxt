<template>
    <div class="parents__menu">
        <ul class="parents__menu-container">
            <HeaderMenuItem :way="'/students'" :text="'ПРАВИЛА БЕЗОПАСНОСТИ'" :onPage="students" />

            <HeaderMenuItem :way="'/studentsplatform'" :text="'ПЛАТФОРМЫ ПОМОЩНИКИ'" :onPage="platform" />

            <HeaderMenuItem :way="'/studentsexamination'" :text="'ПОДГОТОВКА К ЭКЗАМЕНАМ'" :onPage="examination" />
        </ul>
    </div>
</template>
<script scoped setup>
const route = useRoute();
const students = ref(false);
const platform = ref(false);
const examination = ref(false);

if (route.fullPath == "/students") {
    students.value = true;
}
if (route.fullPath == "/studentsplatform") {
    platform.value = true;
}
if (route.fullPath == "/studentsexamination") {
    examination.value = true;
}
watch(route, () => {
    if (route.fullPath == "/students") {
        students.value = true;
    } else {
        students.value = false;
    }
    if (route.fullPath == "/studentsplatform") {
        platform.value = true;
    } else {
        platform.value = false;
    }
    if (route.fullPath == "/studentsexamination") {
        examination.value = true;
    } else {
        examination.value = false;
    }
})
</script>
<style scoped lang="scss">
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
        flex-wrap: wrap;
        list-style-type: none;
        text-decoration: none;
        margin-right: auto;
        margin-left: auto;
        justify-content: center;
        //  border: 1px red solid;
    }
}
</style>
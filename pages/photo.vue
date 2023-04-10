<script setup>
import { artek, cozvezdie, lager, sixclass, flachmob, forum, police, court, iset, containerCompany, fathersDay } from '../utils/photoArray';

definePageMeta({
    layout: "header",
})

</script>
<template>
    <main className="content">
        <section className="photo">
            <PhotoBlock :title="'Обучение в Артеке. Июль 2021г.'" :array-photo="artek" />
            <PhotoBlock :title="'Региональный конкурс управленческих команд Созвездие'" :array-photo="cozvezdie" />
            <PhotoBlock :title="' Лагерь остров детства, ЮИД 9 декабря 2021г.'" :array-photo="lager" />
            <PhotoBlock :title="'Мои шестиклашки'" :array-photo="sixclass" />
            <PhotoBlock :title="'Светящийся флэшмоб'" :array-photo="flachmob" />
            <PhotoBlock :title="'Всероссийский форум классных руководителей 9-10 октября 2021 года'" :array-photo="forum" />
            <PhotoBlock :title="'Экскурсия в отдел полиции c. Исетское'" :array-photo="police" />
            <PhotoBlock :title="'Экскурсия в районный суд c. Исетское'" :array-photo="court" />
            <PhotoBlock :title="'Профориентация, 20 сентября 2021 года экскурсия ООО ЗапСибХлеб-Исеть'"
                :array-photo="iset" />
            <PhotoBlock :title="'Экскурсия на предприятие ПРОНТО-мягкие контейнеры'" :array-photo="containerCompany" />
            <PhotoBlock :title="'День пап, спортивные соревнования среди 6 классов'" :array-photo="fathersDay" />
        </section>
    </main>
</template>


<style lang="scss">
.content {}

.photo {
    display: flex;
    flex-direction: column;
    max-width: 1026px;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin: 40px auto 0 auto;
}
</style>
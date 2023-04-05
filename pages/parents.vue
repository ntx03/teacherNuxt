<script setup>
import one from '../assets/documents/parents/1.png';
import two from '../assets/documents/parents/IMG-20200413-WA0034.jpg';
import tree from '../assets/documents/parents/Брошюра в чем поучаствовать школьнику.pdf'
//import four from '../assets/documents/parents/как родителям справиться с буллингом.doc'
import five from '../assets/documents/parents/Крупнейшие федеральные проекты в сфере профориентации.pdf'
//import six from '../assets/documents/parents/рекомендации родителям при адаптации к 5 классу.docx'
// import seven from '../assets/documents/parents/1.png'
definePageMeta({
    layout: "header",
})
</script>
<template>
    <main class="content">
        <section class="greetings">
        <div class="parents__container">
                <h2 class="greetings__title">
                    Полезные материалы для родителей
                </h2>
            <ul class="parents__list">
                    <ParentsDocument :name="'Организация учебного процесса в домашней обстановке'" :href="one"
                    :nameLink="'СКАЧАТЬ'" />
                <ParentsDocument :name="'Рекомендация родителям детей, временно находящихся на дистанционном обучении'"
                        :href="two" :nameLink="'СКАЧАТЬ'" />
                    <ParentsDocument :name="'Брошюра на тему Школа для будущей профессии'" :href="tree"
                        :nameLink="'СКАЧАТЬ'" />
                    <!-- <ParentsDocument :name="'Памятка Как родителям справиться с буллингом'" :href="four" 
                                                :nameLink="'СКАЧАТЬ'" /> -->
                    <ParentsDocument :name="'Крупнейшие федеральные проекты в сфере профессиональной ориентации'"
                        :href="five" :nameLink="'СКАЧАТЬ'" />
                    <!--  <ParentsDocument :name="'Рекомендации родителям по адаптации учащихся 5-х классов'" :href="six"
                                    :nameLink="'СКАЧАТЬ'" /> -->
                    <!-- <ParentsDocument :name="'Советы родителям при переходном возрасте ребёнка'"
                            :href="'../assets/documents/parents/советы родителям по переходному периоду детей.docx'"
                            :nameLink="'СКАЧАТЬ'" /> -->
                    <ParentsDocument :name="'Сайт `Атлас новых профессий` - ваш навигатор по рынку'"
                        :href="'https://new.atlas100.ru/'" :nameLink="'ПЕРЕЙТИ'" />
                </ul>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.greetins {}

.parents__container {
    max-width: 1024px;
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.greetings__title {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 20px;
    line-height: 1.15;
    color: black;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 20px auto 0 auto;
    /*border: tomato 1px solid;*/
}

.parents__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    padding: 0;
    gap: 10px;
    margin: 20px 10px 0 10px;
}

@media (max-width:767px) {
    .parents__list {
        display: grid;
        grid-template-columns: 1fr;
        width: 85%;
        margin: 15px auto 15px auto;
    }

}

@media (max-width:560px) {
    .greetings__title {
        font-size: 16px;
        margin: 20px 5px 0 5px;
    }

}
</style>
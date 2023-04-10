<script setup>
import resh from "../assets/российская информационная школа.jpg";
import classs from "../assets/photo/Я_класс.jpg";
import ushi from "../assets/учи_ру.jpg";
import skysmar from "../assets/skysmart.jpg"
definePageMeta({
    layout: "header",
})
</script>
<template>
    <ClientOnly>
        <main className="content">
            <MenuStudents />
            <section className="students">
                <div className="students__container">
                    <div className="students__cards-container">
                        <StudentWebsite :name="'САЙТ РОССИЙСКАЯ ЭЛЕКТРОННАЯ ШКОЛА'" :link="'https://resh.edu.ru/'"
                            :title="'Российская электронная школа» – это интерактивные уроки по всему школьному курсу с 1 по 11 класс от лучших учителей страны, созданные для того, чтобы у каждого ребёнка была возможность получить бесплатное качественное общее образование.'"
                            :linkImage="resh"
                            :altImage="'фотография главной страницы сайта Российская электронная школа'" />
                        <StudentWebsite :name="'САЙТ Я КЛАСС'" :link="'https://www.yaklass.ru/'"
                            :title="'ЯКласс» — образовательный интернет-ресурс для школьников, студентов, учителей и родителей. Начал работу в 2014 году. Сегодня онлайн-площадкой пользуются 12 миллионов пользователей из 50 000 школ России, Австрии, Армении, Беларуси, Германии, Индии, Казахстана, Кыргызстана, Латвии, Узбекистана,  Финляндии.Портал содержит онлайн-тренажёры  по школьной программе и автоматическую проверку домашних заданий. «ЯКласс» — выпускник акселератора ФРИИ, резидент программ «Сколково» и Microsoft. База ЯКласс содержит 1,6 триллиона заданий по 16 предметам школьной программы, ЕГЭ, ОГЭ и ВПР. 65 %  учащихся пользуются сервисом с мобильных устройств.'"
                            :linkImage="classs" :altImage="'фотография главной страницы сайта Я класс'" />
                        <StudentWebsite :name="'САЙТ Учи.ру — интерактивная образовательная онлайн-платформа'"
                            :link="'https://uchi.ru/'" :title="'Учи.ру — интерактивная образовательная онлайн-платформа'"
                            :linkImage="ushi" :altImage="'фотография главной страницы сайта Учи.ру'" />
                        <StudentWebsite :name="'САЙТ Skysmart — цифровая образовательная онлайн-платформа'"
                            :link="'https://edu.skysmart.ru/'"
                            :title="'Skysmar — цифровая образовательная онлайн-платформа'" :linkImage="skysmar"
                            :altImage="'фотография главной страницы сайта Skysmar'" />
                    </div>
                </div>
            </section>
        </main>
    </ClientOnly>
</template>

<style scoped lang="scss">
.content {}

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

.students__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #dcdcdc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.students__cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 20px;
    width: 100%;
    margin: 20px auto 20px auto;
}

@media (max-width:768px) {
    .students__cards-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: 20px;
        width: 100%;
        margin: 20px auto 20px auto;
    }
}
</style>
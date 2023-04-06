<script setup>
import Шестой_класс_аннотация from "../assets/documents/teachers/work_programm/6-класс-аннотация-2021-22.pdf";
import Пятый_класс_аннотация from "../assets/documents/teachers/work_programm/аннотация-5-класс.pdf";
import Программа from "../assets/documents/teachers/work_programm/6-класс-2021-22.pdf";
import Аннотация from "../assets/documents/teachers/work_programm/Аннотация 6 класс 8 вид.pdf";
import Седьмой_класс_аннотация from "../assets/documents/teachers/work_programm/Аннотация 7 класс.pdf";
import Восьмой_класс_аннотация from "../assets/documents/teachers/work_programm/Аннотация 8 класс.pdf";
import Девятый_класс_аннотация from "../assets/documents/teachers/work_programm/аннотация 9 класс.pdf";
import Одиннадцатый_класс_аннотация from "../assets/documents/teachers/work_programm/Аннотация11 б.pdf";
import Десятый_класс_аннотация from "../assets/documents/teachers/work_programm/Аннотация 10 класс.pdf";
import Планирование from "../assets/documents/teachers/work_programm/география 8 класс планирование.pdf";
import КТП_восьмой_класс from "../assets/documents/teachers/work_programm/ктп 8 класс климанова.pdf";
import Рабочая_программа from "../assets/documents/teachers/work_programm/рабочая программа 5 класс.pdf";
import Рабочая_программа_шестой_класс from "../assets/documents/teachers/work_programm/рабочая программа 6 класс 8 вид.pdf";
import Рабочая_программа_седьмой_класс from "../assets/documents/teachers/work_programm/рабочая программа 7 класса.pdf";
import Рабочая_программа_девятый_класс from "../assets/documents/teachers/work_programm/рабочая программа 9 класс.pdf";
import Рабочая_программа_десятый_класс from "../assets/documents/teachers/work_programm/рабочая программа 10 класс.pdf";
import Рабочая_программа_11_класс from "../assets/documents/teachers/work_programm/рабочая программа 11 б.pdf";

definePageMeta({
    layout: "header",
})
</script> 
<template >
    <main className="content">
        <MenuColleagues />
        <section className="greetings">
            <div className="greetings__container">
                <ul className="parents__list">
                    <ParentsDocument
                        :name="'Аннотация О.А. Климанова, В.В. Климанов, Э.В. Ким  География. Землеведение. 6 класс (34 часа, 1 раз в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Шестой_класс_аннотация" />
                    <ParentsDocument :name="'Рабочая программа по географии 6 класс'" :nameLink="'СКАЧАТЬ'"
                        :href="Программа" />
                    <ParentsDocument
                        :name="'Аннотация О.А. Климанова, В.В. Климанов, Э.В. Ким География. Землеведение. 5 класс (34 часа, 1 раз в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Пятый_класс_аннотация" />
                    <ParentsDocument :name="'Аннотация 6 класс 8 вид'" :nameLink="'СКАЧАТЬ'" :href="Аннотация" />
                    <ParentsDocument
                        :name="'Аннотация О.А. Климанова, В.В. Климанов, Э.В. Ким География. Землеведение. 7 класс (68 часов, 2 раза в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Седьмой_класс_аннотация" />
                    <ParentsDocument
                        :name="'Аннотация А.И. Алексеев, В. А. Низовцев, Э.В. Ким География. Землеведение. 8 класс (68 часов, 2 раз в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Восьмой_класс_аннотация" />
                    <ParentsDocument
                        :name="'А.И. Алексеев, В.А. Низовцев, Э. В. Ким География. Хозяйство России. Хозяйство и географические районы 9 класс (68 часов, 2 раз в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Девятый_класс_аннотация" />
                    <ParentsDocument
                        :name="'`АННОТАЦИЯ Максаковский В. П. Экономическая и социальная география мир. 10 класс (34 часа, 1 раз в неделю).'"
                        :nameLink="'СКАЧАТЬ'" :href="Десятый_класс_аннотация" />
                    <ParentsDocument
                        :name="'АННОТАЦИЯ Максаковский В. П. Экономическая и социальная география мир. 11 класс (34 часа, 1 раз в неделю).'"
                        :nameLink="'СКАЧАТЬ'" :href="Одиннадцатый_класс_аннотация" />
                    <ParentsDocument
                        :name="'Домогацких Е. М., Алексеевский Н. И.География: физическая география России.8 класс (68 часов, 2 раза в неделю).'"
                        :nameLink="'СКАЧАТЬ'" :href="Планирование" />
                    <ParentsDocument :name="'ктп 8 класс климанова'" :nameLink="'СКАЧАТЬ'" :href="КТП_восьмой_класс" />
                    <ParentsDocument :name="'Рабочая программа 5 класс'" :nameLink="'СКАЧАТЬ'" :href="Рабочая_программа" />
                    <ParentsDocument :name="'рабочая программа 6 класс 8 вид'" :nameLink="'СКАЧАТЬ'"
                        :href="Рабочая_программа_шестой_класс" />
                    <ParentsDocument
                        :name="'Программа курса «География. Страноведение» (7 класс) О.А. Климанова, В.В. Климанов (68 часов, 2 часа в неделю)'"
                        :nameLink="'СКАЧАТЬ'" :href="Рабочая_программа_седьмой_класс" />
                    <ParentsDocument :name="'Рабочая программа по географии 9 класс'" :nameLink="'СКАЧАТЬ'"
                        :href="Рабочая_программа_девятый_класс" />
                    <ParentsDocument
                        :name="'Рабочая программа Максаковский В. П. Экономическая и социальная география мира. 11 класс (34 часа, 1 раз в неделю).'"
                        :nameLink="'СКАЧАТЬ'" :href="Рабочая_программа_11_класс" />
                    <ParentsDocument :name="'Рабочая программа 10 класс'" :nameLink="'СКАЧАТЬ'"
                        :href="Рабочая_программа_десятый_класс" />
                </ul>
            </div>
        </section>
    </main>
</template>




<style lang="scss">
.greetings {}

.greetings__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: row;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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

    .greetings__container {
        flex-direction: column;
    }
}
</style>
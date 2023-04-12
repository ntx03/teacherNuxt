<script setup>
import one from '../assets/documents/teachers/Викторина Тюм обл.pdf';
import two from '../assets/documents/teachers/геоинформационные-технологии-на-уроках-географии.pdf';
import tree from '../assets/documents/teachers/ИГРЫ-НА-УРОКАХ-ГЕОГРАФИИ.pdf';
import four from '../assets/documents/teachers/Ландшафтная карта.jpg';
import five from '../assets/documents/teachers/Оценочная карта.jpg'
import six from '../assets/documents/teachers/практико-ориентированный-подход.pdf';
import seven from '../assets/documents/teachers/Презентация-на-тему-Интерактивные-методы-обучения-.pdf'
import eight from '../assets/documents/teachers/Тюменская-область.pdf'
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
                    <ParentsDocument :name="'Викторина Тюменской области'" :nameLink="'СКАЧАТЬ'" :href="one" />
                    <ParentsDocument :name="'Геоинформационные технологии на уроках географии'" :nameLink="'СКАЧАТЬ'"
                        :href="two" />
                    <ParentsDocument :name="'Игры на уроках географии'" :nameLink="'СКАЧАТЬ'" :href="tree" />
                    <ParentsDocument :name="'Ландшафтная карта Исетского района'" :nameLink="'СКАЧАТЬ'" :href="four" />
                    <ParentsDocument :name="'Оценочная карта Исетского района'" :nameLink="'СКАЧАТЬ'" :href="five" />
                    <ParentsDocument :name="'Практико-ориентированный подход на уроках географии'" :nameLink="'СКАЧАТЬ'"
                        :href="six" />
                    <ParentsDocument :name="'Презентация на тему Интерактивные методы обучения'" :nameLink="'СКАЧАТЬ'"
                        :href="seven" />
                    <ParentsDocument :name="'Презентация на тему Тюменская область вчера и сегодня'" :nameLink="'СКАЧАТЬ'"
                        :href="eight" />
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
    background-color: $grey;
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
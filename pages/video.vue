<script setup>
const video = 'https://rutube.ru/play/embed/ed0f54b70b230b7d4305a56ea1c413b8';
definePageMeta({
    layout: "header",
})
</script>
<template>
    <main className="content">
        <MenuVideo />
        <section className="video">
            <div className="video__container">
                <p className="video__text-heaher">Выбирай свою будущую профессию уже сейчас!</p>
                <div className="video__block">
                    <VideoCard :link="'https://rutube.ru/play/embed/0c91a2b2456067d50b8e54e2e4ad99c7'"
                        :name="'КНАУФ, основанная в 1932 году, является семейной компанией попроизводству строительных материалов и систем, в которой трудится множество сотрудников различных национальностей.'" />
                    <VideoCard :link="'https://rutube.ru/play/embed/bfcc7954fa0379b49ee322931ec65a77'"
                        :name="'СИБУР Тобольск (ранее — Тобольский нефтехимический комбинат,Тобольск-Нефтехим) — российское (ранее советское) нефтехимическое предприятие, расположенное в городе Тобольске Тюменской области. Предназначено для глубокой переработки широкой фракции лёгких углеводородов.'" />
                    <VideoCard :link="'https://rutube.ru/play/embed/ed0f54b70b230b7d4305a56ea1c413b8'"
                        :name="'Тобольск-Полимер» — реализованный компанией СИБУР в рамках государственной программы, проект крупнейшего в России промышленного комплекса по переработке компонентов попутного нефтяного газа (ПНГ) с получением востребованных марок полимеров. Входит в тройку крупнейших подобных производств в мире[1]. Расположен в городе Тобольске Тюменской области.'" />
                    <VideoCard :link="'https://www.youtube.com/embed/UKgUznabBGU'"
                        :name="'АО Аминосиб сегодня – это инвестиционный проект федерального значения, а вскоре - крупнейший производитель аминокислот в России, современное высокотехнологичное предприятие по глубокой переработке пшеницы, производительность которого при выходе на полную мощность составит более 120 тыс. тонн зерна в год.'" />
                    <VideoCard :link="'https://www.youtube.com/embed/6GMDmirH6ts'"
                        :name="'Как устроена АЭС? Как она работает? Надежность АЭС. Редактор сюжета: Александр Колтовой.'" />
                    <VideoCard :link="'https://www.youtube.com/embed/Pw0jPG6hHXA'"
                        :name="'Описание: Документальный фильм о доменной печи Россиянка, выпущенный телеканалом Россия-24. Железо - один из самых распространенных металлов, но в чистом виде он не встречается.  Чтобы извлечь железо из земли, пришлось организовать сложный технологический процесс. Только в XIV веке была изобретена доменная печь - большая металлургическая, вертикально расположенная плавильная печь шахтного типа для выплавки чугуна и ферросплавов из железорудного сырья. Доменная печь открыла новую страницу истории - железную эру и подарила человеку железную дорогу и Эйфелеву башню, автомобиль и небоскреб.'" />
                    <VideoCard :link="'https://www.youtube.com/embed/IjzBK53xL5M'"
                        :name="'Виртуальная экскурсия по СХПК ЖЕЛНИНСКИЙ Вагайского района.'" />
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.video {}

.video__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: $grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}


.video__text-heaher {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: $black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin: 40px auto 20px auto;
}

.video__block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    margin: auto;
    row-gap: 20px;
    margin: 0 20px 0 20px;
}

.video__text-heaher {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: $black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    margin: 40px auto 20px auto;
}

@media (max-width:768px) {
    .video__block {
        gap: 10px;
        margin: 0 5px 0 5px;
        display: grid;
        grid-template-columns: 1fr;
    }

    .video__container {
        flex-direction: column;
    }
}

@media (max-width:500px) {
    .video__text-heaher {
        margin: 40px 10px 20px 10px;
    }

    .video__text-heaher {
        margin: 40px 10px 20px 10px;
    }
}
</style>
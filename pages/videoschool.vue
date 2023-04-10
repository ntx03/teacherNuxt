<template>
    <main className="content">
        <MenuVideo />
        <section className="video">
            <div className="video__container">
                <p className="video__text-heaher">Когда мы вместе - это сила!</p>
                <div className="video__block">
                    <VideoCard :link="'https://rutube.ru/play/embed/c4074c4bb47d0c6206689241edfe0b59'"
                        :name="'Флэшмоб ко Дню студента, учащиеся МАОУ исетской СОШ 1 поздравляют с Днём студента.'" />
                    <VideoCard :link="'https://rutube.ru/play/embed/c33b525d6c342f093579ddcca6674e22'"
                        :name="'Флэшмоб - акция к Дню флага от РДШ, Отряд 3, летний оздоровительный лагерь.'" />
                    <VideoCard :link="'https://rutube.ru/play/embed/17c75c85f980f94c7d7c5bb208d93185'"
                        :name="'К Дню русского языка, который будет 21 февраля 6 а класс подготовил приветствия на разных языках мира.'" />

                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
definePageMeta({
    layout: "header",
})
</script>
<style scoped lang="scss">
.video {}

.video__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}


.video__text-heaher {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
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
    color: black;
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
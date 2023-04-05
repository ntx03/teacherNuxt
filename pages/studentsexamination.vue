<template >
    <main className="content">
        <MenuStudents />
        <section className="students">
            <div className="students__container">
                <div className="students__cards-container">
                    <VideoCard :link="'https://www.youtube.com/embed/l5KlXJ_16LY'"
                        :name="'Подготовка к ГИА. География 11 класс. 17.01.2020'" />
                    <VideoCard :link="'https://www.youtube.com/embed/D5f8jEhvVTg'"
                        :name="'Подготовка к ГИА. География 9 класс. 29.03.2019'" />
                    <VideoCard :link="'https://www.youtube.com/embed/jy7kCkD5rBA'"
                        :name="'Подготовка к ГИА. География 11 класс. 22.03.2019'" />
                    <VideoCard :link="'https://www.youtube.com/embed/JMrV5nhaLbA'"
                        :name="'Подготовка к ГИА. География 9 класс. 22.10.2020'" />
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
.students {}

.content {}

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
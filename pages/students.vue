<script setup>
import kids6 from "../assets/documents/kids/6.jpg";
import на_улице from "../assets/documents/kids/на улице.jpg";
import при_пожаре from "../assets/documents/kids/по пожару.jpg";
import школа from "../assets/documents/kids/Пямятка-Дорога-в-школу-и-обратно.jpg";
import советы from "../assets/documents/kids/Советы_начинающим_велосипедистам.jpg";
import поведение from "../assets/documents/kids/террор.jpeg";
definePageMeta({
    layout: "header",
})

</script>
<template>
    <ClientOnly>
        <main class="content">
            <MenuStudents />
            <section class="students">
                <div class="students__container">
                    <div class="students__cards-container">
                        <StudentsCard :link="kids6" :name="'Безопасное поведение на льду водоема'" />
                        <StudentsCard :link="на_улице" :name="'Безопасное поведение на улице'" />
                        <StudentsCard :link="при_пожаре" :name="'Безопасное поведение при пожаре'" />
                        <StudentsCard :link="школа" :name="'Школа дорожной безопасности'" />
                        <StudentsCard :link="советы" :name="'Советы начинающим велосипедистам'" />
                        <StudentsCard :link="поведение" :name="'Поведение при террорестических угрозах'" />
                    </div>
                </div>
            </section>
        </main>
    </ClientOnly>
</template>
<style lang="scss" scoped>
.content {}

.students {}

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

@media (max-width:460px) {
    .parents__menu {
        //  background-color: rgba(0, 0, 0, 0.0);
        border: none;

        &-container {
            flex-wrap: wrap;
        }
    }
}
</style>
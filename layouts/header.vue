<script setup>
const button = useButton();
const route = useRoute();
const main = ref(false);
const about = ref(false);
const student = ref(false);
const parents = ref(false);
const colleagues = ref(false);
const video = ref(false);
const photo = ref(false);
const contacts = ref(false);
const news = ref(false);

if (route.fullPath == "/") {
    main.value = true;
}
if (route.fullPath == "/aboutme") {
    about.value = true;
}
if (route.fullPath == "/students" || route.fullPath == "/studentsplatform" || route.fullPath == "/studentsexamination") {
    student.value = true;
}
if (route.fullPath == "/parents") {
    parents.value = true;
}
if (route.fullPath == "/photo") {
    photo.value = true;
}
if (route.fullPath == "/colleagues" || route.fullPath == "/colleagueswork") {
    colleagues.value = true;
}
if (route.fullPath == "/video" || route.fullPath == "/videoschool") {
    video.value = true;
}
if (route.fullPath == "/contacts") {
    contacts.value = true;
}
if (route.fullPath == "/news") {
    news.value = true;
}
watch(route, () => {
    route.fullPath == "/" ? main.value = true : main.value = false;
    route.fullPath == "/aboutme" ? about.value = true : about.value = false;
    route.fullPath == "/students" || route.fullPath == "/studentsplatform" || route.fullPath == "/studentsexamination" ? student.value = true : student.value = false;
    route.fullPath == "/parents" ? parents.value = true : parents.value = false;
    route.fullPath == "/colleagues" || route.fullPath == "/colleagueswork" ? colleagues.value = true : colleagues.value = false;
    route.fullPath == "/video" || route.fullPath == "/videoschool" ? video.value = true : video.value = false;
    route.fullPath == "/photo" ? photo.value = true : photo.value = false;
    route.fullPath == "/contacts" ? contacts.value = true : contacts.value = false;
    route.fullPath == "/news" ? news.value = true : news.value = false;
})
</script>

<template >
    <ClientOnly>
        <header class="header">
            <div class="header__title-container">
                <p class="header__title">Учитель географии</p>
                <p class="header__title">Коротаева Анна Юрьевна</p>
                <p class="header__title">МАОУ Исетская СОШ №1 Исетского района Тюменской области</p>
            </div>
            <div class="header__slogan-container">
                <h3 class="header__slogan">"Ученик -это не сосуд, который надо наполнить,</h3>
                <h3 class="header__slogan">а факел, который надо зажечь"</h3>
                <p class="header__slogan-autor">В.А.Сухомлинский</p>
            </div>
            <div class="header__menu-button-container">
                <button class="header__menu-button" @click="() => button = true"></button>
                <p class="header__menu-button-text">МЕНЮ</p>
            </div>
            <div class="header__menu" :class="{ 'header__menu_open': button }">
                <ul class="header__menu-container header__menu-container_row">

                    <HeaderMenuItem :way="'/'" :text="'ГЛАВНАЯ'" :onPage="main" @click="() => button = false" />
                    <HeaderMenuItem :way="'/aboutme'" :text="'О СЕБЕ'" :onPage="about" @click="() => button = false" />
                    <HeaderMenuItem :way="'/students'" :text="'УЧЕНИКАМ'" :onPage="student" @click="() => button = false" />
                    <HeaderMenuItem :way="'/parents'" :text="'РОДИТЕЛЯМ'" :onPage="parents" @click="() => button = false" />
                    <HeaderMenuItem :way="'/colleagues'" :text="'КОЛЛЕГАМ'" :onPage="colleagues"
                        @click="() => button = false" />
                </ul>
                <ul class="header__menu-container header__menu-container_row">
                    <HeaderMenuItem :way="'/video'" :text="'ВИДЕО'" :onPage="video" @click="() => button = false" />
                    <HeaderMenuItem :way="'/photo'" :text="'ФОТО'" :onPage="photo" @click="() => button = false" />
                    <HeaderMenuItem :way="'/contacts'" :text="'КОНТАКТЫ'" :onPage="contacts"
                        @click="() => button = false" />
                    <HeaderMenuItem :way="'/news'" :text="'НОВОСТИ'" :onPage="news" @click="() => button = false" />
                </ul>
            </div>
        </header>
        <slot />
        <footer class="footer">
            <p class="footer__copyright">&copy; 2022 - 2023. Сайт учителя географии, Коротаевой Анны Юрьевны.</p>
        </footer>
    </ClientOnly>
</template>
  
<style lang="scss" scoped>
.header {
    max-width: 1280px;
    margin: 0 auto 0 auto;
}

.header__title {
    margin: 0;
    font-family: 'Philosopher', sans-serif;
    font-size: 22px;
    line-height: 1.05;
    color: $black;
    font-style: italic;
    font-weight: 700;
    margin: 15px auto 0 20px;
    text-align: justify;

    &:first-child {
        margin-top: 0;
        padding-top: 15px;
    }

    &:last-child {
        padding-bottom: 20px;
    }
}

.header__title-container {
    background-image: url("../assets/1530173750_shapka-sayta-turizm-16353731.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    max-width: 1000px;
    margin: 0 auto 0 auto;
}

.header__slogan {
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: $black;
    font-style: italic;
    font-weight: bold;
    margin: 10px 10px 0 auto;
    text-align: end;
}

.header__slogan-autor {
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 16px;
    line-height: 1.15;
    color: $black;
    font-style: italic;
    font-weight: bold;
    text-align: end;
    margin: 20px 20px 20px auto;
    position: relative;
}

.header__slogan-container {
    max-width: 1000px;
    margin: 20px auto 0 auto;
}

.header__menu-button {
    background-image: url(../assets/1.svg);
    width: 50px;
    height: 50px;
    border: none;
    background-color: $ligthGrey;
    background-repeat: no-repeat;
}

.header__menu-button-text {
    margin: 0;
    padding: 0;
    width: min-content;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 20px;
    line-height: 1.15;
    color: $black;
    font-style: normal;
    font-weight: bold;
    background-image: url(../assets/white-waves.png);
    padding-top: 15px;
    padding-left: 20px;
}

.header__menu {
    max-width: min-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background-color: $grey;
    align-items: center;
    justify-items: center;
    margin: 10px auto 30px auto;
    border-radius: 3px;
    border: 1px solid $grey;
}

.header__menu-container {
    max-width: min-content;
    margin: 0 0 0px 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-decoration: none;
}

.footer {
    max-width: 1024px;
    margin: 0 auto 0 auto;
    background-color: $grey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 1;
    border: $grey 1px solid;

    &__copyright {
        margin: 0;
        max-width: 500px;
        font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
        font-size: 12px;
        line-height: 1.3;
        color: black;
        background-color: $grey;
        font-style: normal;
        font-weight: normal;
        margin: 30px auto 20px 20px;
    }
}

@media (max-width:960px) {
    .header__menu {
        flex-direction: column;
    }
}

@media screen and (max-width: 800px) {
    .header__title-container {
        background-size: cover;
    }
}

@media (min-width:200px) {
    .header__menu-button-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 300px;
        height: min-content;
        margin: 0 auto 40px 20px;
    }

    .header__menu-button-text {
        display: block;
    }

    .header__menu-button {
        display: block;
    }
}

@media (min-width:560px) {
    .header__menu-button-container {
        display: none;
    }
}

@media (max-width:560px) {
    .header__title {
        font-size: 18px;
    }

    .header__slogan {
        font-size: 16px;
    }

    .header__menu {
        display: none;

        &_open {
            margin: 10px auto 30px 30px;
            position: absolute;
            z-index: 1;
            display: block;
            top: 250px;
            box-shadow: 0 0 0 99999px rgba(0, 0, 0, .8);
            box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .8);
        }
    }

    .header__slogan-autor {
        font-size: 14px;
    }

    .header__menu-container {
        justify-content: center;
        min-width: 40px;
        display: none;

        &_row {
            flex-direction: column;
            flex-wrap: nowrap;
            display: block;
        }
    }
}

@media (max-width:430px) {
    .header__title {
        margin: 15px 5px 0 5px;
        font-size: 16px;
        text-align: start;
    }

    .header__slogan {
        text-align: center;

        &:nth-child(2) {
            margin: 0px 10px 0 auto;
        }
    }
}
</style>
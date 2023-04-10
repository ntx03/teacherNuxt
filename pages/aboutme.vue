<script setup>
import { professionalDevelopment, myAchievements, studentsAchievements } from '../utils/photoAboutMe';
import video from '../assets/Коротаева А.Ю.mp4';
definePageMeta({
    layout: "header",
})
const popup = usePopup();
const image = usePopupImage();
const name = usePopupName();

const openPopup = (e) => {
    popup.value = true;
    image.value = e.target.src;
    name.value = e.target.alt;
}
</script>
<template>
    <ClientOnly>
        <main class="content">
            <section class="me">
                <div class="me__container">
                    <div class="me__container-biography">
                        <div class="me__image-container">
                            <img id="s" class="me__image me__image-biography" @click="openPopup" src="../assets/aboutMe.jpg"
                                alt="фотография анны коротаевой" />
                        </div>
                        <div class="me__container-text">
                            <p class="me__text">

                                Родилась 10 октября 1990 года в с. Исетское Исетского района Тюменской области. Окончила
                                школу в
                                2008 году и поступила в Тюменский
                                государственный университет на специальность География. Вела активную общественную жизнь.
                                Участвовала в областной студ. весне,
                                разрабатывали и реализовывали проекты в «Молодой гвардии», активно вовлекали иностранных
                                студентов.
                            </p>
                            <p class="me__text">

                                Окончила университет в 2013 году и вернулась в родное село, где сразу начала работать в МАОУ
                                Исетской СОШ №1 c. Исетское Тюменской
                                области. География всегда привлекала меня, манила к путешествиям. На своих уроках пытаюсь
                                развить познавательный интерес. Мы с
                                детьми активно участвуем в районных конференциях, проводим экологические акции и запускаем
                                челенджи, проводим волонтерские
                                мероприятия.
                            </p>
                        <p class="me__text">
                            В настоящее время увлекаюсь чтением педагогической литературы, вышиваю крестиком, бисером,
                                люблю
                                готовить и проводить время с
                                семьей, веду блог в инстаграме «Навигатора детства».
                            </p>
                        </div>
                    </div>
                    <div class="me__container-documents">
                        <p class="me__title">Видеопрезентация "Я - учитель"</p>
                        <div class="me__card-container">
                            <iframe class="me__image" src="https://www.youtube.com/embed/U8vALd5nYbs"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <!-- <video controls class="me__image">
                                        <source :src="video" type="video/mp4" />
                                    </video> -->

                        </div>
                    </div>
                    <div class="me__container-documents">
                        <p class="me__title">Встреча с министром просвещения Кравцовым С.С., Артек, июль 2021 г.</p>
                        <div class="me__card-container">
                            <img class="me__image" src="../assets/Министр.jpg" @click="openPopup"
                                alt="Фотография Аны Которавевой с министром образования России" />
                        </div>
                    </div>

                    <div class="me__container-documents">
                        <p class="me__title">Повышение квалификации</p>
                        <div class="me__container-cards">
                            <PhotoContainerAboutMe :name="item.name" :link="item.link"
                                v-for="item in professionalDevelopment" />
                        </div>
                    </div>
                    <div class="me__container-documents">
                        <p class="me__title">Мои достижения</p>
                        <div class="me__container-vinner">
                            <PhotoContainerAboutMeVinner :name="item.name" :link="item.link"
                                v-for="item in myAchievements" />
                        </div>
                    </div>
                    <div class="me__container-documents">
                        <p class="me__title">Достижения учеников</p>
                        <div class="me__container-vinner">
                            <PhotoContainerAboutMeVinner :name="item.name" :link="item.link"
                                v-for="item in studentsAchievements" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </ClientOnly>
</template>

<style scoped lang="scss">
.content {}

.me__image {
    width: 97%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;

    &:hover {
        cursor: pointer;
    }

    &-source {
        width: 100%;
        border: 1px red solid;
    }

    &-biography {
        object-fit: cover;

    }
}

.me__text {
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    text-indent: 25px;
    margin: 20px 20px 0 0;
}


.me__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    &-biography {
        max-width: 1024px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content;
    }
}

.me__image-container {
    width: 65%;
    height: 45%;
    position: relative;
    padding-top: 50%;
    padding-left: 25%;
    object-fit: cover;
    object-position: center;
    margin: 20px 20px 20px 20px;
}

.me__container-documents {
    max-width: 1024px;
    margin: 0 20px 0 20px;
}

.me__title {
    margin: 0;
    max-width: 1000px;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 22px;
    line-height: 1.15;
    color: black;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    margin: 40px 20px 0 20px;
    /*border: tomato 1px solid;*/
}

.me__card-container {
    width: 100%;
    position: relative;
    padding-top: 55%;
    object-fit: cover;
    object-position: start;
    margin-top: 15px;
}

.me__container-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
    column-gap: 10px;
    margin: 20px 20px 20px 20px;
    justify-content: flex-start;
    align-content: start;
}

.me__container-vinner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    margin: 30px 20px 20px 20px;
}

.me__container-swiper {
    display: flex;
    width: 100%;
    height: 100%;
    border: red solid 1px;
    color: red;
}

.me__vinner-container {
    width: 100%;
    position: relative;
    padding-top: 100%;
    object-fit: cover;
    object-position: center;
}


@media (max-width:767px) {
    .me__container-vinner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 10px;
        margin: 20px 20px 20px 20px;
    }

    .me__container {
        flex-direction: column;
    }

    .me__title {
        font-size: 18px;
        margin: 20px 40px 0 40px;
    }

    .me__container-biography {
        display: flex;
        flex-direction: column;
    }

    .me__image-container {
        width: 69%;
        padding-top: 100%;
        margin: 15px auto 0 auto;

    }

    .me__container-text {
        margin: 0 0 0 20px;

    }

    .me__container-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 10px;
        margin: 20px 20px 20px 20px;
    }
}

@media (max-width:560px) {
    .me__text {
        font-size: 16px;
        margin: 10px 20px 0 0;
    }

    .me__title {
        font-size: 16px;
    }
}

@media (max-width:530px) {
    .me__image-container {
        margin: 15px auto 0 auto;
    }
}
</style>
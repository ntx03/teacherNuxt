<script setup>
import VK from "../assets/vk_color_white.svg";
import instagramm from "../assets/instagram_color_white.svg";
definePageMeta({
    layout: "header",
})
const name = ref('');
const description = ref('');
</script> 

<template>
    <main class="content">
        <section class="contacts">
            <h2 class="contacts__title">Контактная информация</h2>
            <div class="contacts__container">
                <div class="contacts__information">
                    <div class="contacts__school-container">
                        <img class="contacts__icon" src="../assets/school_icon.png" alt="иконка школы" />
                        <p class="contacts__text-normal">
                            Муниципальное автономное общеобразовательное учреждение
                            Исетская средняя общеобразовательная школа № 1 Исетского
                            района Тюменской области.
                        </p>
                    </div>
                    <div class="contacts__school-container">
                        <img class="contacts__icon" src="../assets/location.png" alt="иконка местоположения" />
                        <p class="contacts__text">
                            Адрес:
                            <span class="contacts__text-normal">
                                626380, Тюменская область, Исетский район, село Исетское,
                                ул. Кирова,29.
                            </span>
                        </p>
                    </div>
                    <div class="contacts__school-container">
                        <img class="contacts__icon" src="../assets/old-typical-phone.png" alt="иконка с телефоном" />
                        <p class="contacts__text">
                            Телефон:
                            <span class="contacts__text-normal">
                                +7 (34537) 2-10-51.
                            </span>
                        </p>
                    </div>
                    <div class="contacts__school-container">
                        <img class="contacts__icon" src="../assets/email.png" alt="иконка почты" />
                        <p class="contacts__text">
                            Электронная почта:
                            <span class="contacts__text-normal">
                                nika1012@inbox.ru
                            </span>
                        </p>
                    </div>
                    <div class="contacts__social-network">
                        <p class="contacts__text">Социальные сети:</p>
                        <a href="https://vk.com/id6268101" target="blank" class="contacts__social-network-link">
                            <img class="contacts__social-network-icon" :src="VK" alt="логотип vk" />
                        </a>
                        <a href="https://www.instagram.com/navigator_detstva_to/" target="blank"
                            class="contacts__social-network-link">
                            <img class="contacts__social-network-icon" :src="instagramm" alt="логотип instagramm" />
                        </a>
                    </div>
                </div>
                <div class="contacts__map">
                    <iframe class="contacts__box" frameBorder="0"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c0945238dd9075ae80d280cb605337be499c6c16056db4071d2ef253c7247d8&amp;source=constructor" />
                </div>
            </div>
            <div class="contacts__form-container">
                <h2 class="contacts__text-header">Жду ваших сообщений</h2>
                <form class="contacts__form" name="form_for_post_message">
                    <input type="hidden" name="project_name" value="сайт коротаева.рф" />
                    <input type="hidden" name="admin_email" value="ntx033@yandex.ru" />
                    <input type="hidden" name="form_subject" value="сообщение с сайта коротаева.рф" />
                    <input type="text" required placeholder="Имя и фамилия" :value="name" minLength="2" maxLength="40"
                        name="Имя" class="contacts__input" />

                    <textarea type="text" required placeholder="Текст сообщения" :value="description" minLength="2"
                        maxLength="1000" name="message" class="contact__textarea"></textarea>

                    <button id="button_form" class="contacts__button" type="submit">
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    </main>
</template>


<style scoped lang="scss">
.content {}

.contacts {}

.contacts__title {
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

.contacts__container {
    max-width: 1026px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: row;
    background-color: #DCDCDC;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.contacts__school-container {
    display: flex;
    flex-direction: row;
    margin: 20px 10px 20px 20px;
    justify-content: flex-start;
    align-items: center;
}

.contacts__icon {
    width: 30px;
    height: 30px;
}

.contacts__text {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-align: start;
    padding-left: 10px;
}

.contacts__text-normal {
    margin: 0;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.3;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    padding-left: 10px;
    margin-right: 20px;
}

.contacts__social-network {
    display: flex;
    flex-direction: row;
    margin: 20px 10px 20px 50px;
    // justify-content: start;
    align-items: center;
}

.contacts__social-network-icon {
    width: 30px;
    height: 30px;
    object-fit: contain;
}

.contacts__social-network-link {
    margin-left: 10px;
    height: 30px;
    width: 30px;
}

.contacts__map {
    width: 10%;
    position: relative;
    padding-top: 40%;
    padding-left: 40%;
    object-fit: contain;
    object-position: center;
    margin: 10px 10px auto;
}

.contacts__box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
}

.contacts__form-container {
    max-width: 1026px;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #DCDCDC;
}

.contacts__form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 20px auto 20px auto;
    border-radius: 5px;
    background-color: whitesmoke;
}

.contacts__input {
    width: 320px;
    height: 30px;
    margin: 35px auto 20px auto;
    border-radius: 5px;
    border: 1px solid gray;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 12px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: 400;
}

.contact__textarea {
    width: 320px;
    height: 90px;
    margin: 0 auto 20px auto;
    border-radius: 5px;
    border: 1px solid gray;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 12px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: 400;
}

.contacts__button {
    margin: 0 auto 35px auto;
    width: 100px;
    background-color: #DCDCDC;
    border: 1px solid gray;
}

.contacts__text-header {
    margin: 25px auto 0 auto;
    padding: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-align: center;
}

@media (max-width:420px) {
    .contacts__input {
        width: 260px;
        margin: 20px auto 20px auto;
    }

    .contacts__form {
        width: 300px;
    }

    .contact__textarea {
        width: 260px;
    }

    .contacts__button {
        margin: 0 auto 20px auto;
    }
}


@media (max-width:799px) {
    .contacts__container {
        flex-direction: column;

    }

    .contacts__information {
        max-width: 1024px;
    }

    .contacts__map {
        width: 35%;
        position: relative;
        padding-top: 60%;
        padding-left: 60%;
        object-fit: contain;
        object-position: center;
        margin: 0 auto 0 auto;
    }
}

@media (max-width:560px) {
    .contacts__title {
        font-size: 16px;
        margin: 20px 5px 0 5px;
    }

}
</style>
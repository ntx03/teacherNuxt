<script setup>
import { useMain } from "../composables/main/useMain";
import { usePopupTest } from "~/composables/forTest/usePopupTest";

definePageMeta({
    layout: "header",
})

const popupState = usePopupTest()
const popup = usePopup();
const image = usePopupImage();
const name = usePopupName();
const main = useMain();

function getScrollWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;

    if (w1 == w2) {

        w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return (w1 - w2);
};

const openPopup = (e) => {
    popup.value = false;
    image.value = e.target.src;
    name.value = e.target.alt;
}

const closeEsc = (e) => {
    const page = document.querySelector("body");
    if (e.keyCode === 27) {
        // надо вставить конкретный стейт конкретного модального окна
        popupState.value = true;

        document.removeEventListener("keydown", closeEsc);
        page.style.overflow = "";
        page.style.paddingRight = `0px`;
    }
};
/**
* Открываем модальное окно 
*/
const openCustomPopup = (e) => {
    const page = document.querySelector("body");
    e.preventDefault();
    page.style.overflow = "hidden";
    page.style.paddingRight = `${getScrollWidth()}px`;
    document.addEventListener("keydown", closeEsc);
    popupState.value = false;
}

</script>
<template>
    <ClientOnly>
        <section class="content" v-show="main.length > 0">
            <div class="greetings">
                <h2 class="greetings__title" v-for="sentence in main[0].title">
                    {{ sentence }}
                </h2>
                <div class="greetings__container">
                    <div class="greetings__image-container" @click="openPopup">
                        <img class="greetings__image" :src="main[0].url" :alt="main[0].alt" />
                    </div>
                    <div class="greetings__container-text">
                        <p class="greetings__text" v-for="sentence in main[0].text">
                            {{ sentence }}
                        </p>
                        <div class="header__button-container">
                            <button class="header__button-esse">
                                <NuxtLink to="/esse" class="header__button">
                                    Прочитать
                                </NuxtLink>
                            </button>
                            <button class="header__button-esse" @click="openCustomPopup">тест модального окна

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <popupTest />
    </ClientOnly>
</template>

<style scoped lang="scss">
.content {}

.greetings {}

.greetings__title {
    margin: 0;
    max-width: 800px;
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

.greetings__container {
    max-width: 1024px;
    margin: 40px auto 0 auto;
    display: flex;
    flex-direction: row;
    background-color: $grey;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.greetings__image-container {
    width: 100%;
    position: relative;
    padding-top: 50%;
    padding-left: 20%;
    object-fit: cover;
    object-position: center;
    margin: 20px 20px 20px 20px;
}

.greetings__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;

    &:hover {
        cursor: pointer;
    }

}

.greetings__container-text {
    margin: 0 10px 0 10px;
}

.greetings__text {
    margin: 0;
    font-family: inter, 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.3;
    color: black;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    text-indent: 25px;
    margin: 20px 20px 0 0;
}

.header__button-container {
    margin: 20px auto 0 auto;
    padding-right: 20px;
    width: max-content;
}

.header__button-esse {
    min-width: 75px;
    padding: 10px 0 10px 0;
    margin: 0 auto 0 auto;
    border-radius: 10px;
    border: none;
    outline: 1px black solid;
    transition: 0.2s;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
}


.header__button {
    margin: 0;
    font-family: inter, "Helvetica Neue", "Arial", sans-serif;
    width: min-content;
    font-size: 16px;
    line-height: 1.15;
    color: black;
    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    transition-duration: 0.5s;
    text-align: center;
    padding: 7.5px 7.5px 7.5px 7.5px;
    background-color: $ligthGrey;
}

@media (max-width:767px) {
    .greetings__image-container {
        width: 95%;
        padding-top: 100%;
        margin: 0 auto 0 auto;

    }

    .greetings__container {
        flex-direction: column;
    }
}



@media (max-width:560px) {
    .greetings__title {
        font-size: 16px;
        margin: 20px 5px 0 5px;
    }

    .greetings__text {
        font-size: 16px;
        margin: 10px 20px 0 0;
    }

}

@media (max-width:530px) {
    .greetings__image-container {
        margin: 0 auto 20px auto;
    }
}
</style>

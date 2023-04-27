<template>
    <section class="popup" :class="{ popup_none: popupState }">
        <div class="popup__container">
            <h2 class="popup__title">Какое-то действие выполенно успешно!</h2>
            <div class="popup__comment-container">
                <!-- <p class="popup__text">
                    Мой текст
                </p> -->
            </div>
            <button class="popup__button" @click="closePopup">Закрыть</button>
        </div>
        <div id="overlay_profile" class="popup__overlay" @click="closePopup"></div>
    </section>
</template>

<script setup>
import { usePopupTest } from '~/composables/forTest/usePopupTest';
const popupState = usePopupTest();


// надо найти главный класс всей страницы например page или body
const page = document.querySelector("body");



const closeEsc = (e) => {
    if (e.keyCode === 27) {
        // надо вставить конкретный стейт конкретного модального окна
        //store.dispatch("popup/closePopup")
        popupState.value = true;
        document.removeEventListener("keydown", closeEsc);
        page.style.overflow = "";
        page.style.paddingRight = "0px";
    }
};

/**
 * Закрываем модальное окно
 */
function closePopup() {
    popupState.value = true;
    page.style.overflow = "";
    page.style.paddingRight = "0px";
    document.removeEventListener("keydown", closeEsc);
}

</script>

<style scoped lang="scss">
.popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: 14px;
}

.popup__container {
    width: 500px;
    z-index: 1;
    margin: 100px auto auto auto;
    background-color: whitesmoke;
    border-radius: 5px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
    padding: 0 0 10px 0;
    max-height: 80vh;
    overflow-y: auto;
}

.popup_none {
    opacity: 0;
    visibility: hidden;
    width: 1px;
    height: 1px;
}

.popup__title {
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    text-align: center;
    margin: 20px 20px 10px 20px;
    color: black;
}

.popup__button {
    display: flex;
    width: 100px;
    height: 30px;
    border: none;
    background-color: green;
    color: white;
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    border-radius: 5px;
    margin: 20px auto 10px auto;
    transition: 0.5s;
    padding: 5px 0 0 22px;

    &:hover {
        opacity: 0.8;
    }
}

.popup__button-delete {
    width: 80px;
    height: 25px;
    border: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    background-color: #dc3545;
    color: white;
    border-radius: 5px;
    margin: 0 0 10px 0;
    transition: 0.5s;

    &:hover {
        opacity: 0.8;
    }
}

.popup__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
}

.popup__comment-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    // border-bottom: 1px gray solid;

    &:first-child {
        border-top: 1px gray solid;
    }
}

.popup__text-container {
    display: flex;
    gap: 10px;
    margin: 5px 20px 0px 20px;
    border-bottom: 1px gray solid;

    &:last-child {
        border-bottom: none;
    }
}

.popup__text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin: 10px auto 20px 20px;
    text-align: start;
    width: 90%;
    min-height: 10px;
    word-break: normal;
    overflow-x: scroll;
}

.popup__text::-webkit-scrollbar {
    width: 0;
}

.popup__text {
    -ms-overflow-style: none;
}

.popup__text-user {
    font-size: 11px;
    line-height: 15px;
    font-weight: 400;
    text-align: start;
    width: 90%;
    margin: 10px auto 0px 0px;
}
</style>
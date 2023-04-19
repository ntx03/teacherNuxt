<script setup>
import { autorization } from '~/utils/api/api';

const name = ref('');
const password = ref('');

if (!process.server) {
  if (localStorage.getItem('token')) {
    navigateTo('admin/news');
  }
}
/**
 * Авторизация порльзователя
 * @param {name} имя 
 * @param {password} пароль
 */
const goAutorization = (name, password) => {
  autorization(name, password)
    .then((res) => {
      localStorage.setItem('token', res.token);
      navigateTo('/admin/news');
    })
    .catch((e) => console.log(e));
}

</script>

<template>
  <ClientOnly>
    <div class="admin">
      <p class="admin__title">Авторизация пользователя</p>
      <div class="wrapper">
        <div class="admin__wrapper-link">
          <NuxtLink class="admin__link" to="/">
            На главную
          </NuxtLink>
        </div>

        <div class="admin__container">
          <p class="admin__lable">Логин:</p>
          <input type="text" class="admin__input" v-model="name" placeholder="Введите логин" />
        </div>
        <div class="admin__container">
          <p class="admin__lable">Пароль:</p>
          <input type="password" class="admin__input" v-model="password" placeholder="Введите пароль" />
        </div>
        <div class="admin__text-error-box">
          <!-- <p class="errorAuth">
                         Неправильный логин или пароль
                            </p> -->
        </div>
        <button class="admin__button" @click="goAutorization(name, password)">
          Войти
        </button>
      </div>
    </div>
  </ClientOnly>
</template>


<style scoped lang="scss">
.admin {
  display: flex;
  flex-direction: column;
  width: 800px;
  height: max-content;
  padding-top: 20px;
  margin: 0 auto 0 auto;

}

.wrapper {
  margin-top: 100px;
  background-color: $grey;
  border-radius: 10px;
}

.admin__wrapper-link {
  margin: 30px auto 0 50px;
  background-color: $ligthGrey;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  transition: 0.3s;
}

.admin__link {
  text-decoration: none;
  color: black;
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  padding: 5px 0 5px 14px;
}

.admin__wrapper-link:hover {
  opacity: 0.8;
  cursor: pointer;
}

.admin__title {
  margin: 50px auto 0 auto;
  width: max-content;
  font-family: inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
}

.admin__container {
  margin: 20px auto 0 auto;
  width: 260px;
}

.admin__lable {
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  margin: 0 0 2px 0;
  padding: 0;
}

.admin__input {
  width: 95%;
  outline: none;
  border: 1px black solid;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
}

.admin__text-error-box {
  height: 20px;
  margin: 0 auto 20px auto;
  width: max-content;
}

.admin__text-error {
  font-family: inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  color: red;
  margin: 0;
  width: max-content;

  &_none {
    display: none;
  }
}

.admin__button {
  display: flex;
  margin: 0 auto 20px auto;
  width: max-content;
  border: none;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  background-color: $ligthGrey;
  font-family: inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  font-style: normal;
  text-align: center;
  padding: 5px 0 10px 13px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
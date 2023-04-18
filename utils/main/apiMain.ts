import { checkErrorJSON, baseUrl } from '../api';
/**
 * Получаем все для главной страницы
 * @returns объект с данными
 */
export const mainData = async () => {
  const res = await fetch(baseUrl + `main`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return checkErrorJSON(res);
};

/**
 * ЗАмена заголовка на главной страничке
 * @returns заменяемый объект
 */
export const updateTitle = async (title: Array<String>, id: String) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `main-title?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: title,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * Замена текста на главной страничке
 * @returns заменяемый объект
 */
export const updateText = async (text: Array<String>, id: String) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `main-text?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      text: text,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * Замена фотографии на главной страничке
 * @returns заменяемый объект
 */
export const updatePhoto = async (url: String, alt: String, id: String) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `main-photo?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url: url,
      alt: alt,
    }),
  });
  return checkErrorJSON(res);
};

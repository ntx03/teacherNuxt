import { checkErrorJSON, baseUrl } from '../api';

/**
 * Получаем все фото
 * @returns объект с данными
 */
export const getPhoto = async () => {
  const res = await fetch(baseUrl + `photo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return checkErrorJSON(res);
};

interface createBlockPhoto {
  name: String;
  photo: Array<Object>;
}
/**
 * Создаем блок с фотографиями
 * @returns массив с новостями
 */
export const createPhoto = async (obj: createBlockPhoto) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `photo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: obj.name,
      photo: obj.photo,
    }),
  });
  return checkErrorJSON(res);
};

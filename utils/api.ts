/**
 * Проверяем ответ от сервера на статус отличный от 200
 * @param {Object} res  - ответ от сервера
 * @returns - возвращаем ответ от сервера в формате JSON или ошибку со статусом в консоль
 */
export const checkErrorJSON = (res: any) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

const baseUrl: string = 'http://localhost:3000/';

/**
 * Получаем все новости
 * @returns массив с новостями
 */
export const newsList = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `news`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return checkErrorJSON(res);
};

/**
 * Создаем новость
 * @returns массив с новостями
 */
export const createNews = async (obj: Object) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name: obj.name,
      date: obj.date,
      description: obj.description,
      photo: obj.photo,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * удаление новости
 */
export const changeInvNumber = async (id: string) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `news?_id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-auth-token': `${token}`,
    },
  });

  return checkErrorJSON(res);
};

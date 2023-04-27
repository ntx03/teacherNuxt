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

export const baseUrl: string = 'http://localhost:4000/api/';

export const autorization = async (name: String, password: String) => {
  const res = await fetch(baseUrl + 'signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      name: name,
      password: password,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * Получаем все новости
 * @returns массив с новостями
 */
export const newsList = async () => {
  const res = await fetch(baseUrl + `news`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return checkErrorJSON(res);
};

type photo = Array<Object>;

interface createNews {
  name: String;
  date: String;
  description: String;
  photo: photo;
}

/**
 * Создаем новость
 * @returns массив с новостями
 */
export const createNews = async (obj: createNews) => {
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
export const deleteNews = async (id: string) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `news`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      _id: id,
    }),
  });

  return checkErrorJSON(res);
};

import { checkErrorJSON, baseUrl } from './api';

/**
 * Получаем все видео для профориентации
 * @returns объект с данными
 */
export const getVideo = async () => {
  const res = await fetch(baseUrl + `video`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return checkErrorJSON(res);
};

/**
 * Получаем все видео для школьной жизни
 * @returns объект с данными
 */
export const getVideoSchool = async () => {
  const res = await fetch(baseUrl + `video-school`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return checkErrorJSON(res);
};

interface createVideo {
  name: String;
  link: String;
}
/**
 * Создаем видео в профориентацию
 * @returns массив с новостями
 */
export const createVideo = async (obj: createVideo) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `video`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: obj.name,
      link: obj.link,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * Создаем видео в профориентацию
 * @returns массив с новостями
 */
export const createVideoSchool = async (obj: createVideo) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `video-school`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: obj.name,
      link: obj.link,
    }),
  });
  return checkErrorJSON(res);
};

/**
 * удаление видео из профоринтации
 */
export const deleteVideo = async (id: string) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `video?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });

  return checkErrorJSON(res);
};

/**
 * удаление видео из профоринтации
 */
export const deleteVideoSchool = async (id: string) => {
  const token = localStorage.getItem('token');
  const res = await fetch(baseUrl + `video-school?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: `Bearer ${token}`,
    },
  });

  return checkErrorJSON(res);
};

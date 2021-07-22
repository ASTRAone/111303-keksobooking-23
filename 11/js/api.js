const addressToLoad = 'https://23.javascript.pages.academy/keksobooking/data';
const addressToSend = 'https://23.javascript.pages.academy/keksobooking';

const loadAnnouncements = (onSuccess, onFail) => {
  fetch(addressToLoad, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      response.ok ? onSuccess(response.json()) : onFail();
    })
    .catch(() => {
      onFail();
    });
};

const sendAnnouncement = (onSuccess, onFail, onFinal, announcement) => {
  fetch(addressToSend, {
    method: 'POST',
    body: announcement,
  })
    .then((response) => {
      response.ok ? onSuccess() : onFail();
    })
    .catch(() => {
      onFail();
    })
    .finally(() => {
      onFinal();
    });
};

export {loadAnnouncements, sendAnnouncement};

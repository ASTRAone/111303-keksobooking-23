import {activateForm, disableForm, getValidation} from './form.js';
import {mapInit, renderOfferPins} from './map.js';
import {loadAnnouncements} from './api.js';
import {onLoadError} from './messages.js';


disableForm();
mapInit(activateForm());

const onLoadSuccess = (result) => {
  result.then((announcements) =>
    announcements.forEach((announcement) => {
      renderOfferPins(announcement);
    }),
  );
};

loadAnnouncements(onLoadSuccess, onLoadError, getValidation);

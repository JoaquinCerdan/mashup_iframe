import Pages from '../../pages/pages.json';
import globals from '../../../public/globals.json';

export function getDateFormatted(dateValue) {
  let dateSplited = dateValue.split('/');
  let dateSplitedTemp = [dateSplited[2], dateSplited[1], dateSplited[0]];
  let strDate = dateSplitedTemp.join('/');
  let dateFinal = new Date(strDate);
  /* istanbul ignore else */
  if (isNaN(dateFinal.getTime())) {
    dateSplitedTemp = [dateSplited[1], dateSplited[0], dateSplited[2]];
    strDate = dateSplitedTemp.join('/');
    dateFinal = new Date(strDate);
  }
  return getSQLNumericDate(new Date(dateFinal));
}

export function getSQLNumericDate(date) {
  let ONE_DAY = 1000 * 60 * 60 * 24;
  let INITIAL_DATE = new Date('1900-01-01');
  let difference = INITIAL_DATE.getTime() - date.getTime();
  return Math.round(Math.abs(difference / ONE_DAY)) + 2;
}

// Apply filters on the dimension
export function setFilterByMultipleValues(qApp, filterName, values) {
  qApp
    .field(filterName)
    .clear()
    .then(function () {
      qApp.field(filterName).selectValues(values, true, true);
    });
}

export function getCurrentPageAppId() {
  let page = undefined;
  window.apps = {};

  globals.appConfig.forEach(function (app) {
    window.apps[app.name] = app.id;
  });

  Pages.forEach(item => {
    if (window.location.href.includes(item.href)) {
      page = item;
    }
    if (item.childs) {
      item.childs.forEach(item2 => {
        if (window.location.href.includes(item.href + item2.href)) {
          page = item2;
        }
      });
    }
  });

  return page ? window.apps[page.apps[0]] : undefined;
}

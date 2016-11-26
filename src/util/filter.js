import moment from 'moment';
moment.locale('zh-cn');

export function formatTime(createAt) {
  return moment(createAt).fromNow();
}

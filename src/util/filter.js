import moment from 'moment';

export function formatTime(createAt) {
  return moment(createAt).fromNow();
}

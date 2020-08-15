/**
 * Created by RW on 2017/11/1.
 */
import moment from 'moment';

/**
 * 时间格式化
 * @param date
 * @param formatString
 * @returns {*}
 */
export function format( date , formatString ) {
  return moment(new Date(date) , formatString).format(formatString);
}

export function formDateFormat( date , formatString ) {
  return date ? moment(new Date(date) , formatString).format(formatString) :"";
}

/**
 * 获取表单上的时间
 * @param date
 * @returns {string}
 */
export function formDateValue( date , formatString  ) {
  return date ? moment(new Date(date) , formatString) :"";
}


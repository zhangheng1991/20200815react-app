
/**
 * 根据ID获取值
 */
export function valueById(id) {
  return document.getElementById(id).value == null ?
	                  null : document.getElementById(id).value;
}

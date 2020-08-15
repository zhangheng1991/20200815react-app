/**
 * Created by K0410004 on 2017/8/24.
 */


export function abc(key, tree, a) {
  const aaa = getParentKey(key, tree, a);
  return aaa;
}
/**
 * 获取所有父节点
 * @param key
 * @param tree
 * @returns {*}
 */
function getExpandedKeys(key, tree, list) {
  getKeys(key, tree, list);
  return list.reverse();
}

export function getKeys(key, tree, list) {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.id === key)) {
        list.push(node.id);
        break;
      } else {
        list = getKeys(key, node.children, list);

        if (list.length > 0) {
          list.push(node.id);
          break;
        }
      }
    }
  }
  return list;
}

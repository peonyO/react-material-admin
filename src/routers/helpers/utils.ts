/**
 * @description 使用递归将菜单扁平化，以便于添加动态路由。
 * @param {Array} menuList - The menu list.
 * @returns {Array}
 */
export function getFlatMenuList(menuList: UserInfo["menuList"]): UserInfo["menuList"] {
  let newMenuList: UserInfo["menuList"] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}

/**
 * @description 使用递归过滤掉需要在左侧菜单中呈现的菜单项(不包括带有isHide == true的菜单)。
 * @param {Array} menuList - The menu list.
 * @returns {Array}
 */
export function getShowMenuList(menuList: UserInfo["menuList"]) {
  let newMenuList: UserInfo["menuList"] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter(item => {
    item.children?.length && (item.children = getShowMenuList(item.children));
    return !item.isHide;
  });
}

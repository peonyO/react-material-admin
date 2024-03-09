/**
 * @description Flatten the menu using recursion for easier addition of dynamic routes.
 * @param {Array} menuList - The menu list.
 * @returns {Array}
 */
export function getFlatMenuList(menuList: UserInfo["menuList"]): UserInfo["menuList"] {
  let newMenuList: UserInfo["menuList"] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}

/**
 * @description Use recursion to filter out the menu items that need to be rendered in the left menu (excluding menus with isHide == true).
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

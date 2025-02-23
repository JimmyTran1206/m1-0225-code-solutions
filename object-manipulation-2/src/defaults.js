'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const sourceKey in source) {
    let isExistingTargetKey = false;
    for (const targetKey in target) {
      if (targetKey === sourceKey) {
        isExistingTargetKey = true;
        break;
      }
    }
    if (!isExistingTargetKey) {
      target[sourceKey] = source[sourceKey];
    }
  }
}

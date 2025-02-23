/* exported defaults */
function defaults(
  target: Record<string, any>,
  source: Record<string, any>
): void {
  for (const sourceKey in source) {
    let isExistingTargetKey: boolean = false;
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

export function getLocalStorageItem(): any {
  const item = localStorage.getItem('user') || '{}';
  if (item) {
    return JSON.parse(item) || '';
  }
  return {};
}

export async function setLocalStorageItem(item: any = {}): Promise<any> {
  let currentItem: any = localStorage.getItem('user');
  currentItem = currentItem ? JSON.parse(currentItem) : {};
  const newItem = { ...currentItem, ...item };
  return await localStorage.setItem('user', JSON.stringify(newItem));
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

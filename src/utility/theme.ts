export const changeTheme = (theme: string = 'dark1') => {
  const html = document.getElementsByTagName('html')[0];
  if (html) {
    localStorage.setItem('theme', theme);
    html.setAttribute('data-theme', theme);
  }
}
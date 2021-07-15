export const toPersinaDigit = (en_number=1) => {
  let id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return en_number.replace(/[0-9]/g, function (w) { return id[+w] });
}






export const toEnglishDigit = (fa_number = '۱۰') => {
  let find = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let replace = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let replaceString = fa_number;
  let regex;
  for (let i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return (+replaceString);
};



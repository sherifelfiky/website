const date = new Date();

let month = date.getMonth() + 1;

document.write(
  date.getFullYear() +
    " " +
    month +
    " " +
    date.getDate() +
    " " +
    date.getHours() +
    " " +
    date.getMinutes()
);



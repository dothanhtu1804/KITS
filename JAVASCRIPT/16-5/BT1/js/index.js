const bt1 = (a, b) => {
  const result = a * b;
  console.log(result);
};
const bt2 = (i) => {
  return i % 2 === 0
    ? console.log(i + " la so chan")
    : console.log(i + " la so le");
};

const bt3 = (name) => console.log("Xin chao " + name + "!!!");

const bt4 = (name, age) => {
  console.log("name = " + name);
  console.log("age = " + age);
  console.log("Xin chào " + name + " " + age + " tủi");
};

const bt5 = () => {
  console.log(name);
  console.log(age);
  var name = "lydia";
  let age = 21;
};

const bt6 = () => {
  console.log(!!true);
  console.log(!"Luan");
};

const bt7 = () => {
  let a = 3;
  let b = new Number(3);
  let c = 3;
  console.log(a == b);
  console.log(a === b);
  console.log(b === c);
};

const bt8 = (average_score) => {
  switch (true) {
    case average_score < 5 && average_score > 0:
      console.log("ko đạt");
      break;
    case average_score >= 5 && average_score < 6.5:
      console.log("đạt");
      break;
    case average_score >= 6.5 && average_score < 8:
      console.log("Khá");
      break;
    case average_score >= 8 && average_score <= 10:
      console.log("Giỏi");
      break;
    default:
      console.log("Điểm không hợp lệ");
      break;
  }
};

const bt9 = (i) => {
  if (i > 0) {
    for (let n = 0; n <= i; n++) {
      console.log(n);
    }
  }
};

const bt10 = () => {
  let sum = 0;
  for (let index = 0; index <= 100; index++) {
    sum += index;
  }
  console.log(sum);
};

const bt11 = (multiplication_table) => {
  for (let index = 0; index <= 10; index++) {
    console.log(multiplication_table + " * " + index + " = " + multiplication_table * index);
  }
};

console.log("Bai 1");
bt1(7, 3);
console.log("Bai 2");
bt2(121);
console.log("Bai 3");
bt3("Tu");
console.log("Bai 4");
bt4("Tú", 23);

console.log("Bai 5");
// bt5();

console.log("Bai 6");

bt6();

console.log("Bai 7");

bt7();

console.log("Bai 8");

bt8(-1);

bt9(10);

bt10();

bt11(4);

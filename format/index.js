function format(n) {
  if (typeof n === "number") {
    const str = String(n);
    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (i % 3 === 0 && i !== 0) result += ",";
      result += str[i];
    }

    return result;
  } else throw TypeError("please send number");
}

console.log(format(""));

export function getUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ name: data.name, age: data.age, color: data.color }),
      1000
    );
    () => reject(alert("땡"));
  });
}

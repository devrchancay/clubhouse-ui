import faker from "faker";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUser(num: number) {
  return Array.from({ length: num })
    .fill({})
    .map(() => {
      const id = random(1, 60);
      const gender = id % 2 === 0 ? 1 : 0;
      const name = faker.name.firstName(gender);
      const lastName = faker.name.lastName();
      const genderPhoto = gender === 0 ? "men" : "women";

      return {
        id,
        name: `${name} ${lastName}`,
        shortName: name,
        photo: `https://randomuser.me/api/portraits/${genderPhoto}/${id}.jpg`,
      };
    });
}

export default function () {
  const numRoms = random(5, 25);

  return Array.from({ length: numRoms })
    .fill({})
    .map(() => {
      const numUsers = random(10, 50);
      return {
        comunity: faker.lorem.text().substr(0, 12).toUpperCase(),
        title: faker.lorem.text().substr(0, 40),
        users: generateUser(numUsers),
      };
    });
}

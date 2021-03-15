import faker from "faker";

function generateUser(num: number) {
  return Array.from({ length: num })
    .fill({})
    .map(() => {
      const id = Math.round(Math.random() * 80 + 1);
      const gender = id % 2 === 0 ? 1 : 0;
      const name = faker.name.firstName(gender);
      const lastName = faker.name.lastName();
      const genderPhoto = gender === 0 ? "men" : "women";
      return {
        name: `${name} ${lastName}`,
        shortName: name,
        photo: `https://randomuser.me/api/portraits/${genderPhoto}/${id}.jpg`,
      };
    });
}

export default function () {
  const numRoms = Math.random() * 30 + 1;

  return Array.from({ length: numRoms })
    .fill({})
    .map(() => {
      const numUsers = Math.random() * 5 + 1;
      return {
        comunity: faker.lorem.text().substr(0, 12).toUpperCase(),
        title: faker.lorem.text().substr(0, 40),
        users: generateUser(numUsers),
      };
    });
}

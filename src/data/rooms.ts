import faker from "faker";

function generateUser(num: number) {
  return Array.from({ length: num })
    .fill({})
    .map(() => ({
      name: faker.name.firstName(),
    }));
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

import faker from "faker";

const endpoint = "https://randomuser.me/api/";

function generateUser(num: number) {
  return Array.from({ length: num })
    .fill({})
    .map(() => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }));
}

export default function () {
  const numRoms = Math.random() * 30 + 1;

  return Array.from({ length: numRoms })
    .fill({})
    .map(() => {
      const id = Math.round(Math.random() * 80 + 1);
      const numUsers = Math.random() * 5 + 1;
      return {
        comunity: faker.lorem.text().substr(0, 12).toUpperCase(),
        title: faker.lorem.text().substr(0, 40),
        users: generateUser(numUsers),
        firstUser: `https://randomuser.me/api/portraits/women/${id}.jpg`,
        secondUser: `https://randomuser.me/api/portraits/men/${id + 1}.jpg`,
      };
    });
}

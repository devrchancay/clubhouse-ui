import faker from "faker";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUser(num: number, index: number) {
  return Array.from({ length: num })
    .fill({})
    .map(() => {
      const id = random(1, 60);
      const gender = id % 2 === 0 ? 1 : 0;
      const name = faker.name.firstName(gender);
      const lastName = faker.name.lastName();
      const genderPhoto = gender === 0 ? "men" : "women";
      const isModerator = index === 0 ? random(0, 1) : 0;

      return {
        id,
        name: `${name} ${lastName}`,
        shortName: name,
        photo: `https://randomuser.me/api/portraits/${genderPhoto}/${id}.jpg`,
        index,
        isModerator: !!isModerator,
      };
    });
}

export default function () {
  const numRoms = random(5, 25);

  return Array.from({ length: numRoms })
    .fill({})
    .map(() => {
      const numSpeakers = random(2, 10);
      const numFollowers = random(3, 8);
      const numOthersUsers = random(10, 20);

      return {
        comunity: faker.lorem.text().substr(0, 12).toUpperCase(),
        title: faker.lorem.text().substr(0, 40),
        users: [numSpeakers, numFollowers, numOthersUsers]
          .map((num, index) => generateUser(num, index))
          .flat(),
      };
    });
}

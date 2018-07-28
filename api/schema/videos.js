import faker from 'faker';
import moment from 'moment';

export const getFrames = (pageSize = 10) => new Array(pageSize).fill().map(() => { //eslint-disable-line
  return {
    id: faker.random.uuid(),
    time: moment(faker.date.recent()).valueOf(),
    img: faker.internet.avatar()
  };
});

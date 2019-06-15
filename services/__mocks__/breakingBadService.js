export const getCharacters = jest.fn().mockResolvedValue({
  status: 200,
  data: [
    {
      appearance: [1, 2, 3, 4, 5],
      birthday: '09-07-1958',
      char_id: 1,
      img:
        'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      name: 'Walter White',
      nickname: 'Heisenberg',
      occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
      portrayed: 'Bryan Cranston',
      status: 'Presumed dead',
    },
    {
      appearance: [1, 2, 3, 4, 5],
      birthday: '09-24-1984',
      char_id: 2,
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg',
      name: 'Jesse Pinkman',
      nickname: "Cap n' Cook",
      occupation: ['Meth Dealer'],
      portrayed: 'Aaron Paul',
      status: 'Alive',
    },
    {
      appearance: [1, 2, 3, 4, 5],
      birthday: '08-11-1970',
      char_id: 3,
      img:
        'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
      name: 'Skyler White',
      nickname: 'Sky',
      occupation: [
        'House wife',
        'Book Keeper',
        'Car Wash Manager',
        'Taxi Dispatcher',
      ],
      portrayed: 'Anna Gunn',
      status: 'Alive',
    },
    {
      appearance: [1, 2, 3, 4, 5],
      birthday: '07-08-1993',
      char_id: 4,
      img:
        'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
      name: 'Walter White Jr.',
      nickname: 'Flynn',
      occupation: ['Teenager'],
      portrayed: 'RJ Mitte',
      status: 'Alive',
    },
    {
      appearance: [1, 2, 3, 4, 5],
      birthday: 'Unknown',
      char_id: 5,
      img:
        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg',
      name: 'Henry Schrader',
      nickname: 'Hank',
      occupation: ['DEA Agent'],
      portrayed: 'Dean Norris',
      status: 'Deceased',
    },
  ],
});

export const getCharacterDetails = jest.fn().mockResolvedValue({
  status: 200,
  data: {
    appearance: '1,2,3',
    birthday: null,
    char_id: 31,
    img:
      'https://vignette.wikia.nocookie.net/breakingbad/images/c/c9/AdamPinkman.png/revision/latest?cb=20141117180836&path-prefix=es',
    name: 'Adam Pinkman',
    nickname: "Jesse's dad",
    occupation: 'unknown',
    portrayed: 'Michael Bofshever',
    status: 'Alive',
  },
});

export const getEpisodesList = jest.fn().mockResolvedValue({
  status: 200,
  data: [
    {
      air_date: '01-20-2008',
      characters: [
        'Walter White',
        'Jesse Pinkman',
        'Skyler White',
        'Hank Schrader',
        'Marie Schrader',
        'White White Jr.',
      ],
      episode: '1',
      episode_id: 1,
      season: '1',
      title: 'Pilot',
    },
    {
      air_date: '01-27-2008',
      characters: [
        'Walter White',
        'Jesse Pinkman',
        'Skyler White',
        'White White Jr.',
        'Krazy-8',
      ],
      episode: '2',
      episode_id: 2,
      season: '1',
      title: "Cat's in the Bag...",
    },
    {
      air_date: '02-10-2008',
      characters: [
        'Walter White',
        'Jesse Pinkman',
        'Skyler White',
        'Hank Schrader',
        'Marie Schrader',
        'White White Jr.',
      ],
      episode: '3',
      episode_id: 3,
      season: '1',
      title: "...And the Bag's in the River",
    },
    {
      air_date: '02-17-2008',
      characters: [
        'Walter White',
        'Jesse Pinkman',
        'Skyler White',
        'Hank Schrader',
        'Marie Schrader',
        'White White Jr.',
      ],
      episode: '4',
      episode_id: 4,
      season: '1',
      title: 'Cancer Man',
    },
  ],
});

export const getEpisodeDetails = jest.fn().mockResolvedValue({
  status: 200,
  data: {
    air_date: '05-03-2009',
    characters:
      'Walter White, Jesse Pinkman, Skyler White, Hank Schrader, Marie Schrader, White White Jr., Saul Goodman, Jane Margolis',
    episode: '9',
    episode_id: 16,
    season: '2',
    title: '4 Days Out',
  },
});

export const getQuotes = jest.fn().mockResolvedValue({
  status: 200,
  data: {},
});

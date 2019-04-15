export const getDragons = jest.fn().mockResolvedValue({
  status: 200,
  data: [
    {
      id: '54',
      createdAt: '2019-04-13T18:42:21.806Z',
      name: 'Ysera',
      type: 'Verde',
      histories: [],
    },
    {
      id: '56',
      createdAt: '2019-04-14T07:31:43.898Z',
      name: 'Rosamond',
      type: 'azure',
      histories: [],
    },
    {
      id: '57',
      createdAt: '2019-04-13T23:44:08.488Z',
      name: 'Leopoldo',
      type: 'white',
      histories: [],
    },
    {
      id: '61',
      createdAt: '2019-04-14T09:40:39.780Z',
      name: 'Sadie',
      type: 'orange',
      histories: [],
    },
    {
      id: '62',
      createdAt: '19/05/2018',
      name: 'Dinquedo',
      type: 'Amarelo',
      histories: [],
    },
  ],
});

export const deleteDragon = jest.fn().mockResolvedValue({
  status: 200,
});

export const getDetailsDragon = jest.fn().mockResolvedValue({
  status: 200,
  data: {
    id: '62',
    createdAt: '19/05/2018',
    name: 'Dinquedo',
    type: 'Amarelo',
    histories: [],
  },
});

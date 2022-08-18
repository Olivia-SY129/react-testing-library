const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Olivia",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        login: {
          username: "Olivia-SY129",
        },
      },
      {
        name: {
          first: "Olivia",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        login: {
          username: "Olivia-SY129",
        },
      },
      {
        name: {
          first: "Olivia",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        login: {
          username: "Olivia-SY129",
        },
      },
      {
        name: {
          first: "Olivia",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        login: {
          username: "Olivia-SY129",
        },
      },
      {
        name: {
          first: "Olivia",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        login: {
          username: "Olivia-SY129",
        },
      },
    ],
  },
};

const api = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default api;

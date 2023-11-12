import { http, HttpResponse } from "msw";

import { mockUsers } from "../setupTests";
import { setFriend } from "../store/feature/user/utils";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/users`, () => {
    return HttpResponse.json(mockUsers);
  }),

  http.patch(`${urlApi}/users/:id`, async ({ params, request }) => {
    const id = Number(params.id);

    mockUsers.forEach((user) => {
      user.isFriend = id === user.id ? setFriend(user.isFriend) : user.isFriend;
    });

    console.log(await request.json());
    return HttpResponse.json(mockUsers.find((user) => user.id === id));
  }),
];

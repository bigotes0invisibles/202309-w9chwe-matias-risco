import { http, HttpResponse } from "msw";

import { mockUsers } from "../setupTests";

const urlApi = import.meta.env.VITE_URL_API;

export const handlers = [
  http.get(`${urlApi}/users`, () => {
    return HttpResponse.json(mockUsers);
  }),
];

import "@testing-library/jest-dom";
import { server } from "./mocks/main";
import mockData from "./mocks/mockData";
import { UserStructure } from "./store/feature/user/types";

export let mockUsers: UserStructure[] = mockData;

beforeAll(() => {
  mockUsers = mockData;
  return server.listen();
});

afterEach(() => {
  mockUsers = mockData;
  return server.resetHandlers();
});

afterAll(() => server.close());

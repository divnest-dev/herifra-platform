import { BusinessData } from "./mockData";

const mockDataStore: { [key: string]: BusinessData } = {};

export const initializeMockData = (id: string, initialData: BusinessData) => {
  if (!mockDataStore[id]) {
    mockDataStore[id] = initialData;
  }
  return mockDataStore[id];
};

export const updateMockData = (id: string, updates: Partial<BusinessData>) => {
  if (mockDataStore[id]) {
    mockDataStore[id] = {
      ...mockDataStore[id],
      ...updates,
    };
  }
  return mockDataStore[id];
};

export const getMockData = (id: string) => {
  return mockDataStore[id];
};

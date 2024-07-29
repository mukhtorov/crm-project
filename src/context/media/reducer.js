export const initialState = [];

// CRUD - GET, PUT, DELETE, POST
export const reducer = (state, action) => {
  const type = action?.type?.toLowerCase() || "";
  switch (type) {
    case "get":
      return action.payload || [];
    case "delete":
      return {};
  }
};

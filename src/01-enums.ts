enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
};

const nicoUSer: User = {
  username: "nico",
  role: ROLES.ADMIN,
};

const admin_credential = { userName: "vignesh", password: "Qwerty@123" };
let user_details = [
  {
    user_id: 3360,
    userName: "siva",
    password: "sample@1",
    email: "siva@gmail.com",
    role: " software developer",
  },
  {
    user_id: 7861,
    userName: "vicky",
    password: "sample@1",
    email: "vicky@gmail.com",
    role: " software developer",
  },
];

export const prepareSignup = (
  userName: string,
  password: string,
  email: string,
  role: string
) => {
  console.log("services prepareSignup");
  const data = {
    user_id: Math.floor(Math.random() * 9000) + 1000,
    userName,
    password,
    email,
    role,
  };

  user_details.push(data);
  console.log("usr details", user_details);

  return { status: true, message: "user added successfully" };
};

export const prepareLogin = (userName: string, password: string) => {
  console.log("services prepareLogin");

  const [result] = user_details.map((ele, i) => {
    if (
      user_details.some(
        (item) => item.userName === userName && item.password === password
      )
    ) {
      return { status: true, message: "valid" };
    } else {
      return { status: false, message: "INvalid" };
    }
  });

  return result;
};

export { user_details };


const MainUrl = "http://localhost:5000";


export const RegisterAPI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}


export const LoginAPI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}


export const LogoutAPI = async () => {
  try {

    const res = await fetch(`${MainUrl}/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}





export const DeleteUserAPI = async () => {
  try {

    const res = await fetch(`${MainUrl}/auth/account/delete`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}


export const CreateUserAPI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/auth/account/create`, {
      method: "POST",
      credentials: "include",
      body: formData
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}




export const GetUserData = async () => {
  try {

    const res = await fetch(`${MainUrl}/auth/user/data`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}


export const UpdateUserAPI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/auth/user/account/edit/data`, {
      method: "PUT",
      credentials: "include",
      body: formData
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}

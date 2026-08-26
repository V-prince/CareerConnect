const MainUrl = "http://localhost:5000";

export const CreateCompaneyAPI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/companey/create`, {
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


export const GetCompaneyData = async () => {
  try {

    const res = await fetch(`${MainUrl}/companey/data`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log(data)
    return data;

  } catch (error) {
    console.log(error)
  }
}
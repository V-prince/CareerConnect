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


export const CreateJobPostApI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/companey/job/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error)
  }
}

export const UpdateCompaneyAPI = async (formData, id) => {
  try {
    console.log(formData, id)
    const res = await fetch(`${MainUrl}/companey/update/${id}`, {
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

export const GetJobData = async () => {
  try {

    const res = await fetch(`${MainUrl}/companey/job/data`, {
      method: "GET",
      credentials: "include",
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
    return data;

  } catch (error) {
    console.log(error)
  }
}
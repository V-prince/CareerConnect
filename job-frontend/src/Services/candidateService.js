
const MainUrl = "http://localhost:5000";



export const GetSavedJobsData = async () => {
  try {

    const res = await fetch(`${MainUrl}/candidate/fetch/save/jobs`, {
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

export const JobApplyApI = async (formData) => {
  try {

    const res = await fetch(`${MainUrl}/candidate/job/apply`, {
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



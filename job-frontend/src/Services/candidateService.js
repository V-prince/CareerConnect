
const MainUrl = "http://localhost:5000";



export const GetSavedJobsData = async () => {
  try {

    const res = await fetch(`${MainUrl}/candidate/fetch/save/jobs`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}

export const GetJobApplyAPI = async () => {
  try {

    const res = await fetch(`${MainUrl}/candidate/fetch/applications`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}

export const RemovedSavedJobsData = async (id) => {
  try {

    const res = await fetch(`${MainUrl}/candidate/save/job/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify()
    });

    const data = await res.json();
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

export const JobSaveApI = async (jobId) => {
  try {
    const res = await fetch(`${MainUrl}/candidate/save/job/${jobId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify()
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error)
  }
}




export const GetDashboardSatusData = async () => {
  try {

    const res = await fetch(`${MainUrl}/candidate/fetch/dashboard/data`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}
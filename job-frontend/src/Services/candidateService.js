
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
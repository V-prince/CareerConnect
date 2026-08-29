const MainUrl = "http://localhost:5000";



export const GetPublicJobs = async () => {
  try {

    const res = await fetch(`${MainUrl}/jobs`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error)
  }
}
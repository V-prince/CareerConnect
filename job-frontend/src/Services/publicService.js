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

export const GetPublicJobDetails = async ({id}) => {
  try {

    console.log("service",id)

    const res = await fetch(`${MainUrl}/jobs/detail/${id}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    return data;



  } catch (error) {
    console.log(error)
  }
}





const MainUrl = "http://localhost:5000";

export const GetAdminDashboardApI = async () => {
  try {
    const res = await fetch(`${MainUrl}/admin/dashboard/data
`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const GetAdminAppAndJOBDataApI = async () => {
  try {
    const res = await fetch(`${MainUrl}/admin/dashboard/application/job/data
`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const GetAdminManangeDataApI = async () => {
  try {
    const res = await fetch(`${MainUrl}/admin/manage/user/data
`, {
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
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GetPublicJobs } from "../Services/publicService";


const jobContext = createContext();


const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);


  const getJobs = async () => {
    try {
      const data = await GetPublicJobs();

      if (!data.success) {
        return toast.error(data.message);
      }
      console.log(data.jobs)
      setJobs(data.jobs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobs();
  },[])

  return (
    <jobContext.Provider value={{
      jobs,
      setJobs
    }}>
      {children}
    </jobContext.Provider>
  )
}

const useJob = () => useContext(jobContext);

export { JobContextProvider, useJob }



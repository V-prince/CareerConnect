import React from 'react'

export const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-100">
     
      <div className="flex items-center justify-end gap-3 p-4 bg-white shadow-sm">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover"
        />

        <div>
          <h2 className="font-bold text-sm md:text-base">Prince Vadher</h2>
          <p className="text-zinc-500 text-xs md:text-sm">Student</p>
        </div>
      </div>

      
      <div className="p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome back, Prince!
        </h1>

        <p className="text-zinc-600 mt-2 text-sm md:text-base">
          Here's what's happening with your career journey
        </p>

       
        <div className="bg-white rounded-xl shadow-md mt-8 p-5">

          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg md:text-xl">
              Recent Applications
            </h2>

            <button className="text-indigo-600 font-semibold hover:underline">
              View All
            </button>
          </div>

          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b py-5 border-zinc-200">

            
            <div className="flex items-center gap-4">
              <img
                src="/images/google.png"
                alt="Google"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="font-semibold text-base md:text-lg">
                  Software Engineering Intern
                </h3>

                <p className="text-sm text-zinc-500">
                  Google • Bengaluru, Karnataka
                </p>
              </div>
            </div>

            
            <div className="flex flex-wrap items-center gap-3 lg:gap-5">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                Under Review
              </span>

              <p className="text-zinc-500 text-sm">
                2 days ago
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

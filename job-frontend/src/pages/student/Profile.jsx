import { Mail } from 'lucide-react'
import React from 'react'

export const Profile = () => {
  return (
    <section className='min-h-screen bg-indigo-50 mt-16 p-8'>
      <h1 className="text-2xl md:text-3xl font-bold">
        My Profile
      </h1>

      <p className="text-zinc-600 mt-2 text-sm md:text-base">
        View and manage your personal information
      </p>


      <div className='bg-white rounded-xl shadow-md mt-8 p-5'>

        <div className='flex items-center justify-between'>
          <div className='flex gap-x-25'>
            <img src="/images/profile.jpg" alt="" className='w-45 h-45 rounded-full' />
            <div>

              <h1 className='font-bold text-3xl/10'>Prince Vadher</h1>
              <span className='text-zinc-500 font-semibold '>Student</span>

              <div className='mt-5 flex items-center gap-5 text-zinc-500'>
                <Mail size={22}/>
                <span className='text-zinc-800 font-'>vadherprince63@gmail.com</span>
              </div>

            </div>
          </div>

        </div>




      </div>
    </section>
  )
}

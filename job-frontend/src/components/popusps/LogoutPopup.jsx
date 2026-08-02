import React from 'react'

export const LogoutPopup = ({isOpenPopup ,SetisOpenPopup}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold text-zinc-900">
          Logout Confirmation
        </h2>

        <p className="text-sm text-zinc-500 mt-2">
          Are you sure you want to logout? You will need to login again to access your account.
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => SetisOpenPopup(false)}
            className="px-4 py-2 cursor-pointer rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 transition"
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 cursor-pointer rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

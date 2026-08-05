import React, { useState } from 'react'
import { LogoutPopup } from '../../components/popusps/LogoutPopup';
import { DeleteAccountPopup } from '../../components/popusps/DeleteAccountPopup';

export const Setting = () => {

  const [isOpenPopup, SetisOpenPopup] = useState(false);
  const [isOpenDeletePopup, SetisOpenDeletePopup] = useState(false);



  return (
    <section className="relative min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-white mt-16 p-8">


      <h1 className="text-3xl font-bold text-zinc-900">
        Settings
      </h1>

      <p className="text-zinc-600 mt-2">
        Manage your account and security settings.
      </p>

      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">

        {/* Logout */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-200">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">
              Logout
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Sign out from your JobSpark account.
            </p>
          </div>

          <button onClick={() => SetisOpenPopup(true)}
            className="px-5 py-2.5 rounded-lg cursor-pointer bg-zinc-900 text-white hover:bg-zinc-800 transition"
          >
            Logout
          </button>
        </div>
        {
          isOpenPopup && <LogoutPopup isOpenPopup={isOpenPopup} SetisOpenPopup={SetisOpenPopup} />
        }

        {/* Delete Account */}
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-lg font-semibold text-red-600">
              Delete Account
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
          </div>

          <button onClick={() => SetisOpenDeletePopup(true)}
            className="px-5 py-2.5 rounded-lg bg-red-600 cursor-pointer text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
          {
            isOpenDeletePopup && <DeleteAccountPopup isOpenDeletePopup={isOpenDeletePopup} SetisOpenDeletePopup={SetisOpenDeletePopup} />
          }
        </div>

      </div>
    </section>
  )
}

function SuccessPage({ email, profile, details }) {
  return (
    <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">

        <div className="flex flex-1 flex-col items-center justify-center text-center">


          {/* Success Icon */}

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-500/10 text-4xl text-purple-400">
            ✓
          </div>


          {/* Heading */}

          <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
            You're all set!
          </h1>


          {/* Description */}

          <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
            Welcome to Extroverts, {profile.name}.
            Your profile has been successfully completed.
          </p>


          {/* Summary */}

          <div className="mt-10 w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left">

            <p className="text-xs uppercase tracking-widest text-white/30">
              Profile
            </p>


            <div className="mt-5 space-y-4">


              <div className="flex items-center justify-between gap-4">

                <span className="text-sm text-white/40">
                  Email
                </span>

                <span className="max-w-[65%] truncate text-sm font-medium">
                  {email}
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-white/40">
                  Name
                </span>

                <span className="text-sm font-medium">
                  {profile.name}
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-white/40">
                  Age
                </span>

                <span className="text-sm font-medium">
                  {profile.age}
                </span>

              </div>


              <div className="flex items-center justify-between">

                <span className="text-sm text-white/40">
                  Location
                </span>

                <span className="text-sm font-medium">
                  {details.city}, {details.state === 'WestBengal'
                    ? 'West Bengal'
                    : details.state}
                </span>

              </div>

            </div>

          </div>


          {/* CTA */}

          <button
            onClick={() => {
              window.location.reload()
            }}
            className="mt-8 w-full rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Back to home
          </button>

        </div>


        <p className="pb-4 text-center text-xs text-white/30">
          Thanks for joining the Extroverts community.
        </p>

      </div>

    </main>
  )
}

export default SuccessPage;
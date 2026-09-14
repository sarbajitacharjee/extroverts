function SuccessPage({ email, profile, details }) {
  const getStateName = (value) => {
    if (value === 'WestBengal') {
      return 'West Bengal'
    }

    return value
  }

  const handleBackHome = () => {
    window.location.reload()
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#08070c] px-4 py-6 text-white sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-xl flex-col sm:min-h-[calc(100vh-4rem)]">

        {/* SUCCESS CONTENT */}

        <div className="flex flex-1 flex-col items-center justify-center py-6 sm:py-10">

          {/* SUCCESS ICON */}

          <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
            <div className="absolute inset-0 rounded-full bg-purple-500/10" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-purple-400 sm:h-9 sm:w-9"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5L9.5 17L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* HEADING */}

          <p className="mt-6 text-center text-sm font-medium text-purple-400 sm:mt-8">
            Welcome to Extroverts
          </p>

          <h1 className="mt-2 text-center recoleta text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            You're all set!
          </h1>

          <p className="mt-3 max-w-md px-2 text-center text-sm leading-6 text-white/50 sm:mt-4 sm:px-0 sm:text-base">
            Your profile has been successfully completed.
            Welcome to the community, {profile.name}.
          </p>

          {/* -------------------------------------------------
              PROFILE SUMMARY
          ------------------------------------------------- */}

          <div className="mt-8 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d0c11] sm:mt-10">

            {/* HEADER */}

            <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                Profile summary
              </p>
            </div>

            {/* EMAIL */}

            <div className="border-b border-white/5 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs text-purple-400 sm:text-sm">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-medium leading-6 text-white sm:text-base">
                {email}
              </p>
            </div>

            {/* NAME */}

            <div className="border-b border-white/5 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
              <p className="text-xs text-purple-400 sm:text-sm">
                Name
              </p>

              <p className="mt-1 break-all text-sm font-medium text-white sm:mt-0 sm:text-right">
                {profile.name}
              </p>
            </div>

            {/* AGE */}

            <div className="border-b border-white/5 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
              <p className="text-xs text-purple-400 sm:text-sm">
                Age
              </p>

              <p className="mt-1 text-sm font-medium text-white sm:mt-0 sm:text-right">
                {profile.age}
              </p>
            </div>

            {/* PRONOUNS */}

            <div className="border-b border-white/5 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
              <p className="text-xs  text-purple-400 sm:text-sm">
                Pronouns
              </p>

              <p className="mt-1 text-sm font-medium text-white sm:mt-0 sm:text-right">
                {profile.pronouns}
              </p>
            </div>

            {/* LOCATION */}

            <div className="px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5">
              <p className="text-xs  text-purple-400 sm:text-sm">
                Location
              </p>

              <p className="mt-1 text-sm font-medium text-white sm:mt-0 sm:text-right">
                {details.city}, {getStateName(details.state)}
              </p>
            </div>

          </div>

          {/* BACK HOME */}

          <button
            type="button"
            onClick={handleBackHome}
            className="mt-6 w-full rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] sm:mt-8 sm:py-4"
          >
            Back to home
          </button>

        </div>

        {/* FOOTER */}

        <p className="pb-1 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
          Thanks for joining the Extroverts community.
        </p>

      </div>
    </main>
  )
}

export default SuccessPage
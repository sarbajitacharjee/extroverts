import { useEffect } from 'react'

function SuccessPage({ email, profile, details }) {
  /*
   * Prevent accidental browser back navigation from
   * feeling like the signup is still incomplete.
   *
   * This is intentionally lightweight because this is
   * a frontend-only assessment.
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

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
    <main className="min-h-screen overflow-x-hidden bg-[#08070c] px-4 py-5 text-white sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col sm:min-h-[calc(100vh-4rem)]">

        {/* ---------------------------------------------------
            MAIN SUCCESS CONTENT
        --------------------------------------------------- */}

        <div className="flex flex-1 flex-col items-center justify-center py-8 text-center sm:py-12">

          {/* SUCCESS ICON */}

          <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
            <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500/10" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 sm:h-20 sm:w-20">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-400 sm:h-9 sm:w-9"
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

          <p className="mt-7 text-sm font-medium text-purple-400 sm:mt-8">
            Welcome to Extroverts
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            You're all set!
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/50 sm:mt-4 sm:text-base">
            Your profile has been successfully completed.
            Welcome to the community, {profile.name}.
          </p>

          {/* -------------------------------------------------
              PROFILE SUMMARY
          ------------------------------------------------- */}

          <div className="mt-8 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left sm:mt-10">

            {/* CARD HEADER */}

            <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
                Profile summary
              </p>
            </div>

            {/* CARD CONTENT */}

            <div className="divide-y divide-white/5">

              {/* EMAIL */}

              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
                <span className="text-xs text-white/40 sm:text-sm">
                  Email
                </span>

                <span className="max-w-full break-all text-sm font-medium text-white sm:max-w-[65%] sm:text-right">
                  {email}
                </span>
              </div>

              {/* NAME */}

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="text-xs text-white/40 sm:text-sm">
                  Name
                </span>

                <span className="max-w-[60%] truncate text-sm font-medium text-white sm:max-w-[65%] sm:text-right">
                  {profile.name}
                </span>
              </div>

              {/* AGE */}

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="text-xs text-white/40 sm:text-sm">
                  Age
                </span>

                <span className="text-sm font-medium text-white">
                  {profile.age}
                </span>
              </div>

              {/* PRONOUNS */}

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                <span className="text-xs text-white/40 sm:text-sm">
                  Pronouns
                </span>

                <span className="text-sm font-medium text-white">
                  {profile.pronouns}
                </span>
              </div>

              {/* LOCATION */}

              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
                <span className="text-xs text-white/40 sm:text-sm">
                  Location
                </span>

                <span className="text-sm font-medium text-white sm:text-right">
                  {details.city}, {getStateName(details.state)}
                </span>
              </div>

            </div>
          </div>

          {/* -------------------------------------------------
              CTA
          ------------------------------------------------- */}

          <button
            type="button"
            onClick={handleBackHome}
            className="mt-6 w-full rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] sm:mt-8 sm:py-4"
          >
            Back to home
          </button>

        </div>

        {/* ---------------------------------------------------
            FOOTER
        --------------------------------------------------- */}

        <p className="pb-2 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
          Thanks for joining the Extroverts community.
        </p>

      </div>
    </main>
  )
}

export default SuccessPage
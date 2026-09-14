import { useState } from 'react'
import ProfileStep from './components/signup/ProfileStep'
import DetailsStep from './components/signup/DetailsStep'
import SuccessPage from './components/signup/SuccessPage'


function App() {
  const [page, setPage] = useState('landing')

  /*
   * =========================================================
   * LANDING PAGE
   * =========================================================
   */

  if (page === 'landing') {
    return (
      <LandingPage
        onGetStarted={() => setPage('terms')}
      />
    )
  }

  /*
   * =========================================================
   * TERMS PAGE
   * =========================================================
   */

  if (page === 'terms') {
    return (
      <TermsPage
        onBack={() => setPage('landing')}
        onContinue={() => setPage('signup')}
      />
    )
  }

  /*
   * =========================================================
   * SIGNUP PAGE
   * =========================================================
   */

  if (page === 'signup') {
    return (
      <SignupPage
        onBack={() => setPage('terms')}
      />
    )
  }

  return null
}


/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage({ onGetStarted }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08070c] text-white">

      {/* Background Effects */}

      <div className="pointer-events-none fixed inset-0">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      </div>


      {/* Navigation */}

      <header className="relative z-10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg font-bold text-black">
              E
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Extroverts
            </span>

          </div>


          {/* Sign Up */}

          <button
            onClick={onGetStarted}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Sign up
          </button>

        </div>

      </header>


      {/* Hero */}

      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-10">


          {/* Hero Content */}

          <div className="max-w-xl">

            {/* Badge */}

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">

              <span className="h-2 w-2 rounded-full bg-purple-400" />

              Meet. Hangout. Vibe.

            </div>


            {/* Heading */}

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Your people are

              <span className="block text-purple-400">
                out there.
              </span>

            </h1>


            {/* Description */}

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg">

              Discover people, events and experiences around you.
              Step outside your routine and find something worth
              showing up for.

            </p>


            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={onGetStarted}
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
              >
                Get started
              </button>


              <button
                onClick={onGetStarted}
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore Extroverts
              </button>

            </div>

          </div>


          {/* Right Visual */}

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

            {/* Glow */}

            <div className="absolute inset-0 rounded-[3rem] bg-purple-500/20 blur-3xl" />


            {/* Main Card */}

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#211633] via-[#120f19] to-[#09080d] p-5 shadow-2xl">

              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur">


                {/* Card Header */}

                <div className="flex items-center justify-between">

                  <span className="text-sm font-medium text-white/60">
                    EXTROVERTS
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    LIVE
                  </span>

                </div>


                {/* Card Content */}

                <div>

                  <p className="text-sm text-purple-300">
                    Find your vibe
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold leading-tight">

                    Make plans.
                    <br />
                    Meet people.
                    <br />
                    Have fun.

                  </h2>


                  {/* Avatars */}

                  <div className="mt-8 flex -space-x-3">

                    {['A', 'R', 'S', 'M'].map((letter, index) => (

                      <div
                        key={index}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#17131d] bg-white/10 text-sm font-semibold"
                      >
                        {letter}
                      </div>

                    ))}

                  </div>

                </div>


                {/* Event Card */}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                  <p className="text-xs uppercase tracking-wider text-white/40">
                    What's happening
                  </p>

                  <div className="mt-2 flex items-center justify-between">

                    <span className="text-sm font-medium">
                      Weekend Hangout
                    </span>

                    <span className="text-xs text-purple-300">
                      +24
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}


/* =========================================================
   TERMS & CONDITIONS PAGE
========================================================= */

function TermsPage({ onBack, onContinue }) {
  return (
    <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

      <div className="mx-auto max-w-2xl">


        {/* Back */}

        <button
          onClick={onBack}
          className="mb-10 text-sm text-white/50 transition hover:text-white"
        >
          ← Back
        </button>


        {/* Heading */}

        <h1 className="text-3xl font-semibold">
          Terms & Conditions
        </h1>


        <p className="mt-3 text-sm leading-6 text-white/50">
          Please review the terms before continuing.
        </p>


        {/* Terms */}

        <div className="mt-8 space-y-7 text-sm leading-7 text-white/60">


          <section>

            <h2 className="mb-2 font-semibold text-white">
              1. Acceptance of Terms
            </h2>

            <p>
              By continuing, you acknowledge that you have read
              and agree to the terms and conditions governing your
              use of the service.
            </p>

          </section>


          <section>

            <h2 className="mb-2 font-semibold text-white">
              2. Eligibility
            </h2>

            <p>
              You must provide accurate information and meet the
              applicable age requirements to create an account.
            </p>

          </section>


          <section>

            <h2 className="mb-2 font-semibold text-white">
              3. Account Information
            </h2>

            <p>
              You are responsible for providing accurate information
              during registration and keeping your account information
              up to date.
            </p>

          </section>


          <section>

            <h2 className="mb-2 font-semibold text-white">
              4. Responsible Use
            </h2>

            <p>
              You agree to use the platform responsibly and respect
              other members of the community.
            </p>

          </section>

        </div>


        {/* Continue */}

        <button
          onClick={onContinue}
          className="mt-10 w-full rounded-full bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          I agree & continue
        </button>

      </div>

    </main>
  )
}


/* =========================================================
   SIGNUP WIZARD
========================================================= */

function SignupPage({ onBack }) {

  /* ---------------------------------------------------------
     STEP
  --------------------------------------------------------- */

  const [step, setStep] = useState(1)


  /* ---------------------------------------------------------
     EMAIL
  --------------------------------------------------------- */

  const [email, setEmail] = useState('')


  /* ---------------------------------------------------------
     PROFILE
  --------------------------------------------------------- */

  const [profile, setProfile] = useState({
    name: '',
    age: '',
    pronouns: '',
  })

  const [details, setDetails] = useState({
  phone: '',
  state: '',
  city: '',
})

  /* ---------------------------------------------------------
     OTP
  --------------------------------------------------------- */

  const [otp, setOtp] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ])


  /* ---------------------------------------------------------
     ERRORS
  --------------------------------------------------------- */

  const [emailError, setEmailError] = useState('')
  const [otpError, setOtpError] = useState('')


  /* ---------------------------------------------------------
     LOADING
  --------------------------------------------------------- */

  const [loading, setLoading] = useState(false)


  /* =========================================================
     EMAIL VALIDATION
  ========================================================= */

  const validateEmail = (value) => {

    if (!value.trim()) {
      return 'Email address is required.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address.'
    }

    return ''
  }


  /* =========================================================
     EMAIL SUBMIT
  ========================================================= */

  const handleEmailSubmit = async (event) => {

    event.preventDefault()


    const error = validateEmail(email)


    if (error) {

      setEmailError(error)

      return

    }


    setEmailError('')
    setLoading(true)


    // Simulate sending OTP

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })


    setLoading(false)

    setStep(2)

  }


  /* =========================================================
     OTP CHANGE
  ========================================================= */

  const handleOtpChange = (index, value) => {

    // Numbers only

    if (!/^\d*$/.test(value)) {
      return
    }


    // Keep only one digit

    const digit = value.slice(-1)


    const newOtp = [...otp]

    newOtp[index] = digit

    setOtp(newOtp)

    setOtpError('')


    // Move to next input

    if (digit && index < 5) {

      const nextInput = document.getElementById(
        `otp-${index + 1}`
      )

      nextInput?.focus()

    }

  }


  /* =========================================================
     OTP KEYBOARD
  ========================================================= */

  const handleOtpKeyDown = (index, event) => {

    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0
    ) {

      const previousInput = document.getElementById(
        `otp-${index - 1}`
      )

      previousInput?.focus()

    }

  }


  /* =========================================================
     OTP SUBMIT
  ========================================================= */

  const handleOtpSubmit = async (event) => {

    event.preventDefault()


    const enteredOtp = otp.join('')


    if (enteredOtp.length !== 6) {

      setOtpError(
        'Please enter the 6-digit verification code.'
      )

      return

    }


    /*
     * Frontend-only demo verification.
     *
     * Correct OTP:
     * 123456
     */

    if (enteredOtp !== '123456') {

      setOtpError(
        'Incorrect verification code. Please try again.'
      )

      return

    }


    setOtpError('')
    setLoading(true)


    // Simulate verification

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })


    setLoading(false)

    setStep(3)

  }


  /* =========================================================
     RESEND OTP
  ========================================================= */

  const handleResendOtp = async () => {

    setOtpError('')
    setLoading(true)


    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })


    setLoading(false)


    alert('A new verification code has been sent.')

  }


  /* =========================================================
     STEP 1 — EMAIL
  ========================================================= */

  if (step === 1) {

    return (
      <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">


          {/* Header */}

          <div className="flex items-center justify-between">

            <button
              onClick={onBack}
              className="text-sm text-white/50 transition hover:text-white"
            >
              ← Back
            </button>


            <span className="text-xs font-medium tracking-widest text-white/40">
              01 / 04
            </span>

          </div>


          {/* Progress */}

          <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-1/4 rounded-full bg-purple-400" />

          </div>


          {/* Content */}

          <div className="flex flex-1 flex-col justify-center py-16">

            <p className="text-sm font-medium text-purple-400">
              Let's get started
            </p>


            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              What's your email?
            </h1>


            <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
              Enter your email address. We'll send you a
              verification code to continue.
            </p>


            {/* Form */}

            <form
              onSubmit={handleEmailSubmit}
              className="mt-10"
            >

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Email address
              </label>


              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {

                  const value = event.target.value

                  setEmail(value)

                  if (emailError) {
                    setEmailError(
                      validateEmail(value)
                    )
                  }

                }}
                onBlur={() => {
                  setEmailError(
                    validateEmail(email)
                  )
                }}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={loading}
                className={`w-full rounded-2xl border bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/25 ${
                  emailError
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />


              {/* Error */}

              {emailError && (

                <p className="mt-2 text-sm text-red-400">
                  {emailError}
                </p>

              )}


              {/* Continue */}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >

                {loading ? (

                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                    Sending code...
                  </>

                ) : (

                  'Continue'

                )}

              </button>

            </form>

          </div>


          {/* Footer */}

          <p className="pb-4 text-center text-xs leading-5 text-white/30">
            Your email will only be used to verify your account.
          </p>

        </div>

      </main>
    )

  }


  /* =========================================================
     STEP 2 — OTP
  ========================================================= */

  if (step === 2) {

    return (
      <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">


          {/* Header */}

          <div className="flex items-center justify-between">

            <button
              onClick={() => setStep(1)}
              className="text-sm text-white/50 transition hover:text-white"
            >
              ← Back
            </button>


            <span className="text-xs font-medium tracking-widest text-white/40">
              02 / 04
            </span>

          </div>


          {/* Progress */}

          <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-2/4 rounded-full bg-purple-400" />

          </div>


          {/* Content */}

          <div className="flex flex-1 flex-col justify-center py-16">


            {/* Icon */}

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl text-purple-400">
              @
            </div>


            <p className="text-sm font-medium text-purple-400">
              Almost there
            </p>


            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Verify your email
            </h1>


            <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
              We've sent a 6-digit verification code to
            </p>


            <p className="mt-2 break-all font-medium text-white">
              {email}
            </p>


            {/* OTP FORM */}

            <form
              onSubmit={handleOtpSubmit}
              className="mt-10"
            >


              {/* OTP INPUTS */}

              <div className="flex justify-between gap-2 sm:gap-3">

                {otp.map((digit, index) => (

                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(event) => {
                      handleOtpChange(
                        index,
                        event.target.value
                      )
                    }}
                    onKeyDown={(event) => {
                      handleOtpKeyDown(
                        index,
                        event
                      )
                    }}
                    disabled={loading}
                    className={`h-14 w-full rounded-xl border bg-white/[0.04] text-center text-xl font-semibold text-white outline-none transition sm:h-16 ${
                      otpError
                        ? 'border-red-400/70'
                        : 'border-white/10 focus:border-purple-400'
                    }`}
                  />

                ))}

              </div>


              {/* OTP Error */}

              {otpError && (

                <p className="mt-3 text-sm text-red-400">
                  {otpError}
                </p>

              )}


              {/* Verify */}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >

                {loading ? (

                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                    Verifying...
                  </>

                ) : (

                  'Verify email'

                )}

              </button>

            </form>


            {/* Resend */}

            <div className="mt-6 text-center">

              <button
                onClick={handleResendOtp}
                disabled={loading}
                className="text-sm text-purple-400 transition hover:text-purple-300 disabled:opacity-40"
              >
                Didn't receive the code? Resend
              </button>

            </div>


            {/* Demo Code */}

            <div className="mt-8 rounded-2xl border border-purple-400/10 bg-purple-500/5 p-4 text-center">

              <p className="text-xs text-white/40">
                Demo verification code
              </p>

              <p className="mt-1 text-sm font-semibold tracking-[0.3em] text-purple-300">
                123456
              </p>

            </div>

          </div>


          {/* Footer */}

          <p className="pb-4 text-center text-xs leading-5 text-white/30">
            Didn't receive an email? Check your spam folder.
          </p>

        </div>

      </main>
    )

  }


  /* =========================================================
     STEP 3 — PROFILE
  ========================================================= */

  if (step === 3) {

    return (
      <ProfileStep

        initialData={profile}

        onBack={() => {
          setStep(2)
        }}

        onContinue={(data) => {

          setProfile(data)

          setStep(4)

        }}

      />
    )

  }


 if (step === 4) {
  return (
    <DetailsStep
      initialData={details}
      onBack={() => {
        setStep(3)
      }}
      onSubmit={(data) => {
        setDetails(data)
        setStep(5)
      }}
    />
  )
}


if (step === 5) {
  return (
    <SuccessPage
      email={email}
      profile={profile}
      details={details}
    />
  )
}

  return null
}


export default App
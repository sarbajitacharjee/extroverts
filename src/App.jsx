import { useEffect, useState } from 'react'
import ProfileStep from './components/signup/ProfileStep'
import DetailsStep from './components/signup/DetailsStep'
import SuccessPage from './components/signup/SuccessPage'

function App() {
  const [page, setPage] = useState('landing')

  if (page === 'landing') {
    return <LandingPage onGetStarted={() => setPage('terms')} />
  }

  if (page === 'terms') {
    return (
      <TermsPage
        onBack={() => setPage('landing')}
        onContinue={() => setPage('signup')}
      />
    )
  }

  if (page === 'signup') {
    return <SignupPage onBack={() => setPage('terms')} />
  }

  return null
}

/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage({ onGetStarted }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08070c] text-white">

      {/* Background */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-[100px] sm:h-96 sm:w-96" />

        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[100px] sm:h-96 sm:w-96" />
      </div>

      {/* Navigation */}

      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-10">

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-base font-bold text-black sm:h-10 sm:w-10 sm:text-lg">
              E
            </div> */}

            <span className="text-2xl recoleta font-semibold tracking-tight sm:text-3xl">
              Extroverts
            </span>
          </div>

          <button
            type="button"
            onClick={onGetStarted}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Hero */}

      <section className="relative z-10 flex min-h-[calc(100vh-76px)] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">

          {/* Content */}

          <div className="max-w-xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 sm:h-2 sm:w-2" />
              Meet. Hangout. Vibe.
            </div>

            <h1 className="text-5xl recoleta font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your people are

              <span className="block text-purple-400">
                out there.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:mt-7 sm:text-lg sm:leading-7">
              Discover people, events and experiences around you.
              Step outside your routine and find something worth
              showing up for.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">

              <button
                type="button"
                onClick={onGetStarted}
                className="w-full rounded-full recoleta bg-white px-7 py-3.5 text-4xl font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 sm:w-auto"
              >
                Get started
              </button>

              <button
                type="button"
                onClick={onGetStarted}
                className="w-full rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Explore Extroverts
              </button>

            </div>
          </div>

          {/* Right visual */}

          <div className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-lg">

            <div className="absolute inset-0 rounded-[3rem] bg-purple-500/20 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#211633] via-[#120f19] to-[#09080d] p-5 shadow-2xl">

              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur">

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/60">
                    EXTROVERTS
                  </span>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                    LIVE
                  </span>
                </div>

                <div>
                  <p className="text-sm text-purple-300">
                    Find your vibe
                  </p>

                  <h2 className="mt-2 recoleta text-5xl font-semibold leading-tight">
                    Make plans.
                    <br />
                    Meet people.
                    <br />
                    Have fun.
                  </h2>

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

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    What's happening
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-base recoleta font-medium">
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
   TERMS PAGE
========================================================= */

function TermsPage({ onBack, onContinue }) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08070c] px-4 py-5 text-white sm:px-6 sm:py-8">

      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-2xl flex-col sm:min-h-[calc(100vh-4rem)]">

        <button
          type="button"
          onClick={onBack}
          className="mb-8 self-start rounded-lg py-2 text-sm text-white/50 transition hover:text-white sm:mb-10"
        >
          ← Back
        </button>

        <h1 className="text-4xl recoleta font-semibold tracking-tight sm:text-6xl">
          Terms & Conditions
        </h1>

        <p className="mt-3 text-sm leading-6 text-white/50 sm:text-base">
          Please review the terms before continuing.
        </p>

        <div className="mt-7 space-y-6 text-sm leading-7 text-white/60 sm:mt-8 sm:space-y-7">

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

        <div className="mt-auto pt-8 sm:pt-10">
          <button
            type="button"
            onClick={onContinue}
            className="w-full rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 sm:rounded-full sm:py-4"
          >
            I agree & continue
          </button>
        </div>

      </div>
    </main>
  )
}

/* =========================================================
   SIGNUP WIZARD
========================================================= */

function SignupPage({ onBack }) {
  const [step, setStep] = useState(1)

  const [email, setEmail] = useState('')

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

  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const [emailError, setEmailError] = useState('')
  const [otpError, setOtpError] = useState('')

  const [loading, setLoading] = useState(false)

  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'success',
  })

  const [resendCooldown, setResendCooldown] = useState(0)

  /*
   * ---------------------------------------------------------
   * TOAST
   * ---------------------------------------------------------
   */

  const showToast = (message, type = 'success') => {
    setToast({
      visible: true,
      message,
      type,
    })
  }

  useEffect(() => {
    if (!toast.visible) {
      return
    }

    const timer = setTimeout(() => {
      setToast((previous) => ({
        ...previous,
        visible: false,
      }))
    }, 3000)

    return () => clearTimeout(timer)
  }, [toast.visible])

  /*
   * ---------------------------------------------------------
   * RESEND COUNTDOWN
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (resendCooldown <= 0) {
      return
    }

    const timer = setInterval(() => {
      setResendCooldown((previous) => {
        if (previous <= 1) {
          clearInterval(timer)
          return 0
        }

        return previous - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [resendCooldown])

  /*
   * ---------------------------------------------------------
   * EMAIL VALIDATION
   * ---------------------------------------------------------
   */

  const validateEmail = (value) => {
    if (!value.trim()) {
      return 'Email address is required.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value.trim())) {
      return 'Please enter a valid email address.'
    }

    return ''
  }

  /*
   * ---------------------------------------------------------
   * EMAIL SUBMIT
   * ---------------------------------------------------------
   */

  const handleEmailSubmit = async (event) => {
    event.preventDefault()

    if (loading) {
      return
    }

    const error = validateEmail(email)

    if (error) {
      setEmailError(error)
      return
    }

    setEmailError('')
    setLoading(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })

    setLoading(false)
    setStep(2)
    setResendCooldown(30)

    showToast('Verification code sent to your email.')
  }

  /*
   * ---------------------------------------------------------
   * OTP CHANGE
   * ---------------------------------------------------------
   */

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) {
      return
    }

    const digit = value.slice(-1)

    const newOtp = [...otp]
    newOtp[index] = digit

    setOtp(newOtp)
    setOtpError('')

    if (digit && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`,
      )

      nextInput?.focus()
    }
  }

  /*
   * ---------------------------------------------------------
   * OTP KEYBOARD
   * ---------------------------------------------------------
   */

  const handleOtpKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      const previousInput = document.getElementById(
        `otp-${index - 1}`,
      )

      previousInput?.focus()
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      document
        .getElementById(`otp-${index - 1}`)
        ?.focus()
    }

    if (event.key === 'ArrowRight' && index < 5) {
      document
        .getElementById(`otp-${index + 1}`)
        ?.focus()
    }
  }

  /*
   * ---------------------------------------------------------
   * OTP PASTE
   * ---------------------------------------------------------
   */

  const handleOtpPaste = (event) => {
    event.preventDefault()

    const pastedValue = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 6)

    if (!pastedValue) {
      return
    }

    const newOtp = ['', '', '', '', '', '']

    pastedValue.split('').forEach((digit, index) => {
      newOtp[index] = digit
    })

    setOtp(newOtp)
    setOtpError('')

    const focusIndex = Math.min(pastedValue.length, 5)

    document
      .getElementById(`otp-${focusIndex}`)
      ?.focus()
  }

  /*
   * ---------------------------------------------------------
   * OTP SUBMIT
   * ---------------------------------------------------------
   */

  const handleOtpSubmit = async (event) => {
    event.preventDefault()

    if (loading) {
      return
    }

    const enteredOtp = otp.join('')

    if (enteredOtp.length !== 6) {
      setOtpError('Please enter the 6-digit verification code.')
      return
    }

    if (enteredOtp !== '123456') {
      setOtpError('Incorrect verification code. Please try again.')
      return
    }

    setOtpError('')
    setLoading(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1200)
    })

    setLoading(false)
    setStep(3)

    showToast('Email verified successfully.')
  }

  /*
   * ---------------------------------------------------------
   * RESEND OTP
   * ---------------------------------------------------------
   */

  const handleResendOtp = async () => {
    if (loading || resendCooldown > 0) {
      return
    }

    setOtpError('')
    setOtp(['', '', '', '', '', ''])
    setLoading(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    setLoading(false)
    setResendCooldown(30)

    showToast('A new verification code has been sent.')
    
    setTimeout(() => {
      document.getElementById('otp-0')?.focus()
    }, 50)
  }

  /*
   * ---------------------------------------------------------
   * STEP 1 — EMAIL
   * ---------------------------------------------------------
   */

  if (step === 1) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#08070c] px-4 py-5 text-white sm:px-6 sm:py-8">

        <Toast toast={toast} />

        <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col sm:min-h-[calc(100vh-4rem)]">

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onBack}
              disabled={loading}
              className="rounded-lg py-2 text-sm text-white/50 transition hover:text-white disabled:opacity-40"
            >
              ← Back
            </button>

            <span className="text-[11px] font-medium tracking-[0.2em] text-white/40 sm:text-xs">
              01 / 04
            </span>
          </div>

          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-8">
            <div className="h-full w-1/4 rounded-full bg-purple-400" />
          </div>

          <div className="flex flex-1 flex-col justify-center py-10 sm:py-16">

            <p className="text-sm font-medium text-purple-400">
              Let's get started
            </p>

            <h1 className="mt-2 text-4xl recoleta font-semibold tracking-tight sm:mt-3 sm:text-6xl">
              What's your email?
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50 sm:mt-4 sm:text-base">
              Enter your email address. We'll send you a
              verification code to continue.
            </p>

            <form
              onSubmit={handleEmailSubmit}
              noValidate
              className="mt-8 sm:mt-10"
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
                    setEmailError(validateEmail(value))
                  }
                }}
                onBlur={() => {
                  setEmailError(validateEmail(email))
                }}
                placeholder="you@example.com"
                autoComplete="email"
                disabled={loading}
                className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 sm:px-5 sm:py-4 sm:text-base ${
                  emailError
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />

              <div className="min-h-[24px]">
                {emailError && (
                  <p className="mt-2 text-xs leading-5 text-red-400 sm:text-sm">
                    {emailError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:mt-6 sm:py-4"
              >
                {loading ? (
                  <>
                    <LoadingSpinner />
                    Sending code...
                  </>
                ) : (
                  'Continue'
                )}
              </button>

            </form>
          </div>

          <p className="pb-2 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
            Your email will only be used to verify your account.
          </p>

        </div>
      </main>
    )
  }

  /*
   * ---------------------------------------------------------
   * STEP 2 — OTP
   * ---------------------------------------------------------
   */

  if (step === 2) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-[#08070c] px-4 py-5 text-white sm:px-6 sm:py-8">

        <Toast toast={toast} />

        <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col sm:min-h-[calc(100vh-4rem)]">

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (!loading) {
                  setStep(1)
                }
              }}
              disabled={loading}
              className="rounded-lg py-2 text-sm text-white/50 transition hover:text-white disabled:opacity-40"
            >
              ← Back
            </button>

            <span className="text-[11px] font-medium tracking-[0.2em] text-white/40 sm:text-xs">
              02 / 04
            </span>
          </div>

          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-8">
            <div className="h-full w-2/4 rounded-full bg-purple-400" />
          </div>

          <div className="flex flex-1 flex-col justify-center py-10 sm:py-16">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-xl text-purple-400 sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl">
              @
            </div>

            <p className="text-sm font-medium text-purple-400">
              Almost there
            </p>

            <h1 className="mt-2 text-4xl recoleta font-semibold tracking-tight sm:mt-3 sm:text-6xl">
              Verify your email
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/50 sm:mt-4 sm:text-base">
              We've sent a 6-digit verification code to
            </p>

            <p className="mt-1 break-all text-sm font-medium text-white sm:text-base">
              {email}
            </p>

            <form
              onSubmit={handleOtpSubmit}
              className="mt-8 sm:mt-10"
            >

              <div className="grid grid-cols-6 gap-1.5 min-[380px]:gap-2 sm:gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? 'one-time-code' : 'off'}
                    maxLength={1}
                    value={digit}
                    onChange={(event) => {
                      handleOtpChange(
                        index,
                        event.target.value,
                      )
                    }}
                    onKeyDown={(event) => {
                      handleOtpKeyDown(index, event)
                    }}
                    onPaste={handleOtpPaste}
                    disabled={loading}
                    aria-label={`Verification digit ${index + 1}`}
                    className={`h-12 min-w-0 rounded-xl border bg-white/[0.04] text-center text-lg font-semibold text-white outline-none transition sm:h-16 sm:text-xl ${
                      otpError
                        ? 'border-red-400/70'
                        : 'border-white/10 focus:border-purple-400'
                    }`}
                  />
                ))}
              </div>

              <div className="min-h-[24px]">
                {otpError && (
                  <p className="mt-3 text-xs leading-5 text-red-400 sm:text-sm">
                    {otpError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:mt-4 sm:py-4"
              >
                {loading ? (
                  <>
                    <LoadingSpinner />
                    Verifying...
                  </>
                ) : (
                  'Verify email'
                )}
              </button>
            </form>

            <div className="mt-5 text-center sm:mt-6">
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={loading || resendCooldown > 0}
                className="text-xs text-purple-400 transition hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
              >
                {resendCooldown > 0
                  ? `Resend code in ${resendCooldown}s`
                  : "Didn't receive the code? Resend"}
              </button>
            </div>

            {/* Development helper */}
            <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center sm:mt-8 sm:p-4">
              <p className="text-[10px] text-white/25 sm:text-xs">
                Development mode
              </p>

              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                Use <span className="font-semibold text-white/60">123456</span> to verify.
              </p>
            </div>

          </div>

          <p className="pb-2 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
            Didn't receive an email? Check your spam folder.
          </p>

        </div>
      </main>
    )
  }

  /*
   * ---------------------------------------------------------
   * STEP 3 — PROFILE
   * ---------------------------------------------------------
   */

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

  /*
   * ---------------------------------------------------------
   * STEP 4 — DETAILS
   * ---------------------------------------------------------
   */

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

  /*
   * ---------------------------------------------------------
   * STEP 5 — SUCCESS
   * ---------------------------------------------------------
   */

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

/* =========================================================
   TOAST
========================================================= */

function Toast({ toast }) {
  if (!toast.visible) {
    return null
  }

  return (
    <div
      className="fixed inset-x-4 top-4 z-50 flex justify-center sm:inset-x-auto sm:right-6 sm:top-6 sm:justify-end"
      role="status"
      aria-live="polite"
    >
      <div
        className={`flex w-full max-w-sm items-center gap-3 rounded-2xl border px-4 py-3 text-sm shadow-2xl backdrop-blur-xl ${
          toast.type === 'error'
            ? 'border-red-400/20 bg-red-400/10 text-red-200'
            : 'border-purple-400/20 bg-[#17121f]/95 text-white'
        }`}
      >
        <div
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
            toast.type === 'error'
              ? 'bg-red-400/10 text-red-400'
              : 'bg-purple-400/10 text-purple-300'
          }`}
        >
          {toast.type === 'error' ? '!' : '✓'}
        </div>

        <p className="leading-5">
          {toast.message}
        </p>
      </div>
    </div>
  )
}

/* =========================================================
   LOADING SPINNER
========================================================= */

function LoadingSpinner() {
  return (
    <span
      className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black"
      aria-hidden="true"
    />
  )
}

export default App
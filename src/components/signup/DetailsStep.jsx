/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from 'react'

const locations = {
  Tripura: ['Agartala', 'Udaipur', 'Dharmanagar'],
  Assam: ['Guwahati', 'Dibrugarh', 'Silchar', 'Jorhat'],
  Meghalaya: ['Shillong', 'Tura', 'Cherrapunji'],
  WestBengal: ['Kolkata', 'Siliguri', 'Durgapur', 'Howrah'],
}

function DetailsStep({ initialData, onBack, onSubmit }) {
  const [phone, setPhone] = useState(initialData?.phone || '')
  const [state, setState] = useState(initialData?.state || '')
  const [city, setCity] = useState(initialData?.city || '')

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const availableCities = useMemo(() => {
    return state ? locations[state] || [] : []
  }, [state])

  /*
   * ---------------------------------------------------------
   * VALIDATION
   * ---------------------------------------------------------
   */

  const validatePhone = (value) => {
    if (!value.trim()) {
      return 'Phone number is required.'
    }

    if (!/^\d+$/.test(value)) {
      return 'Phone number must contain numbers only.'
    }

    if (value.length !== 10) {
      return 'Phone number must be exactly 10 digits.'
    }

    return ''
  }

  const validate = () => {
    const newErrors = {}

    const phoneError = validatePhone(phone)

    if (phoneError) {
      newErrors.phone = phoneError
    }

    if (!state) {
      newErrors.state = 'Please select your state.'
    }

    if (!city) {
      newErrors.city = 'Please select your city.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /*
   * ---------------------------------------------------------
   * PHONE
   * ---------------------------------------------------------
   */

  const handlePhoneChange = (event) => {
    const value = event.target.value
      .replace(/\D/g, '')
      .slice(0, 10)

    setPhone(value)

    if (errors.phone) {
      setErrors((previous) => ({
        ...previous,
        phone: validatePhone(value),
      }))
    }
  }

  /*
   * ---------------------------------------------------------
   * STATE
   * ---------------------------------------------------------
   */

  const handleStateChange = (event) => {
    const value = event.target.value

    setState(value)

    // City depends on state, so reset it whenever state changes.
    setCity('')

    setErrors((previous) => ({
      ...previous,
      state: '',
      city: '',
    }))
  }

  /*
   * ---------------------------------------------------------
   * CITY
   * ---------------------------------------------------------
   */

  const handleCityChange = (event) => {
    const value = event.target.value

    setCity(value)

    if (errors.city) {
      setErrors((previous) => ({
        ...previous,
        city: '',
      }))
    }
  }

  /*
   * ---------------------------------------------------------
   * SUBMIT
   * ---------------------------------------------------------
   */

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (loading) {
      return
    }

    const isValid = validate()

    if (!isValid) {
      return
    }

    setLoading(true)

    // Simulate saving the final signup details.
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    setLoading(false)

    onSubmit({
      phone,
      state,
      city,
    })
  }

  /*
   * ---------------------------------------------------------
   * RESTORE DATA WHEN GOING BACK
   * ---------------------------------------------------------
   */

  useEffect(() => {
    setPhone(initialData?.phone || '')
    setState(initialData?.state || '')
    setCity(initialData?.city || '')
  }, [initialData])

  return (
    <main className="min-h-screen bg-[#08070c] px-4 py-5 text-white sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-xl flex-col sm:min-h-[calc(100vh-4rem)]">

        {/* ---------------------------------------------------
            HEADER
        --------------------------------------------------- */}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            disabled={loading}
            className="rounded-lg py-2 text-sm text-white/50 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Back
          </button>

          <span className="text-[11px] font-medium tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-widest">
            04 / 04
          </span>
        </div>

        {/* ---------------------------------------------------
            PROGRESS
        --------------------------------------------------- */}

        <div
          className="mt-5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-8"
          aria-label="Signup progress: step 4 of 4"
        >
          <div className="h-full w-full rounded-full bg-purple-400 transition-all duration-500" />
        </div>

        {/* ---------------------------------------------------
            CONTENT
        --------------------------------------------------- */}

        <div className="flex flex-1 flex-col justify-center py-10 sm:py-16">

          <div>
            <p className="text-sm font-medium text-purple-400">
              Almost finished
            </p>

            <h1 className="mt-2 recoleta text-4xl font-semibold tracking-tight sm:mt-3 sm:text-5xl lg:text-6xl">
              A few more details.
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50 sm:mt-4 sm:text-base">
              Add your contact and location details to complete your profile.
            </p>
          </div>

          {/* -------------------------------------------------
              FORM
          ------------------------------------------------- */}

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 space-y-5 sm:mt-10 sm:space-y-6"
          >

            {/* PHONE */}

            <div>
              <label
                htmlFor="details-phone"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Phone number
              </label>

              <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition focus-within:border-purple-400">
                <div className="flex shrink-0 items-center border-r border-white/10 px-3 text-sm text-white/50 sm:px-4">
                  +91
                </div>

                <input
                  id="details-phone"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => {
                    setErrors((previous) => ({
                      ...previous,
                      phone: validatePhone(phone),
                    }))
                  }}
                  placeholder="Enter 10-digit number"
                  autoComplete="tel"
                  maxLength={10}
                  disabled={loading}
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-white/25 sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              <div className="mt-2 flex items-start justify-between gap-3">
                <div className="min-h-[20px]">
                  {errors.phone && (
                    <p className="text-xs leading-5 text-red-400 sm:text-sm">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <span className="shrink-0 text-[11px] text-white/25">
                  {phone.length}/10
                </span>
              </div>
            </div>

            {/* STATE */}

            <div>
              <label
                htmlFor="details-state"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                State
              </label>

              <select
                id="details-state"
                value={state}
                onChange={handleStateChange}
                onBlur={() => {
                  setErrors((previous) => ({
                    ...previous,
                    state: state ? '' : 'Please select your state.',
                  }))
                }}
                disabled={loading}
                className={`w-full appearance-none rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm outline-none transition sm:px-5 sm:py-4 sm:text-base ${
                  state ? 'text-white' : 'text-white/25'
                } ${
                  errors.state
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              >
                <option value="" disabled className="bg-[#121018]">
                  Select your state
                </option>

                <option value="Tripura" className="bg-[#121018]">
                  Tripura
                </option>

                <option value="Assam" className="bg-[#121018]">
                  Assam
                </option>

                <option value="Meghalaya" className="bg-[#121018]">
                  Meghalaya
                </option>

                <option value="WestBengal" className="bg-[#121018]">
                  West Bengal
                </option>
              </select>

              <div className="min-h-[20px]">
                {errors.state && (
                  <p className="mt-2 text-xs leading-5 text-red-400 sm:text-sm">
                    {errors.state}
                  </p>
                )}
              </div>
            </div>

            {/* CITY */}

            <div>
              <label
                htmlFor="details-city"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                City
              </label>

              <select
                id="details-city"
                value={city}
                onChange={handleCityChange}
                onBlur={() => {
                  setErrors((previous) => ({
                    ...previous,
                    city: city ? '' : 'Please select your city.',
                  }))
                }}
                disabled={!state || loading}
                className={`w-full appearance-none rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm outline-none transition sm:px-5 sm:py-4 sm:text-base ${
                  city ? 'text-white' : 'text-white/25'
                } ${
                  errors.city
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                } ${
                  !state
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                }`}
              >
                <option value="" disabled className="bg-[#121018]">
                  {state ? 'Select your city' : 'Select a state first'}
                </option>

                {availableCities.map((cityName) => (
                  <option
                    key={cityName}
                    value={cityName}
                    className="bg-[#121018]"
                  >
                    {cityName}
                  </option>
                ))}
              </select>

              <div className="min-h-[20px]">
                {errors.city ? (
                  <p className="mt-2 text-xs leading-5 text-red-400 sm:text-sm">
                    {errors.city}
                  </p>
                ) : (
                  <p className="mt-2 text-xs leading-5 text-white/30">
                    {state
                      ? `${availableCities.length} cities available`
                      : 'Choose your state to see available cities.'}
                  </p>
                )}
              </div>
            </div>

            {/* COMPLETE BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:py-4"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                  Completing signup...
                </>
              ) : (
                'Complete signup'
              )}
            </button>
          </form>
        </div>

        {/* ---------------------------------------------------
            FOOTER
        --------------------------------------------------- */}

        <p className="pb-2 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
          Your information is used to set up your Extroverts profile.
        </p>
      </div>
    </main>
  )
}

export default DetailsStep
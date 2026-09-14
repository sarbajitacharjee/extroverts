import { useState } from 'react'

const locations = {
  Tripura: [
    'Agartala',
    'Udaipur',
    'Dharmanagar',
    'Kailasahar',
  ],

  Assam: [
    'Guwahati',
    'Silchar',
    'Dibrugarh',
    'Jorhat',
  ],

  Meghalaya: [
    'Shillong',
    'Tura',
    'Cherrapunji',
    'Jowai',
  ],

  WestBengal: [
    'Kolkata',
    'Siliguri',
    'Durgapur',
    'Howrah',
  ],
}

function DetailsStep({ initialData, onBack, onSubmit }) {
  const [phone, setPhone] = useState(
    initialData?.phone || ''
  )

  const [state, setState] = useState(
    initialData?.state || ''
  )

  const [city, setCity] = useState(
    initialData?.city || ''
  )

  const [errors, setErrors] = useState({})

  const [loading, setLoading] = useState(false)


  /* =========================================================
     AVAILABLE CITIES
  ========================================================= */

  const availableCities = state
    ? locations[state] || []
    : []


  /* =========================================================
     VALIDATION
  ========================================================= */

  const validate = () => {
    const newErrors = {}


    /* Phone */

    if (!phone.trim()) {

      newErrors.phone =
        'Please enter your phone number.'

    } else if (!/^\d+$/.test(phone)) {

      newErrors.phone =
        'Phone number must contain numbers only.'

    } else if (phone.length !== 10) {

      newErrors.phone =
        'Phone number must be 10 digits.'

    }


    /* State */

    if (!state) {

      newErrors.state =
        'Please select your state.'

    }


    /* City */

    if (!city) {

      newErrors.city =
        'Please select your city.'

    }


    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }


  /* =========================================================
     CLEAR ERROR
  ========================================================= */

  const clearError = (field) => {

    if (!errors[field]) {
      return
    }

    setErrors((previous) => ({
      ...previous,
      [field]: '',
    }))

  }


  /* =========================================================
     PHONE CHANGE
  ========================================================= */

  const handlePhoneChange = (event) => {

    const value = event.target.value

    // Numbers only

    if (!/^\d*$/.test(value)) {
      return
    }

    // Maximum 10 digits

    if (value.length > 10) {
      return
    }

    setPhone(value)

    clearError('phone')

  }


  /* =========================================================
     STATE CHANGE
  ========================================================= */

  const handleStateChange = (event) => {

    const value = event.target.value

    setState(value)

    /*
     * Reset city whenever state changes.
     *
     * This demonstrates the cross-field dependency
     * required by the assessment.
     */

    setCity('')

    clearError('state')
    clearError('city')

  }


  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (event) => {

    event.preventDefault()

    if (!validate()) {
      return
    }

    setLoading(true)

    /*
     * Simulate frontend submission.
     *
     * The assessment is frontend-only.
     */

    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })

    setLoading(false)

    onSubmit({
      phone,
      state,
      city,
    })

  }


  return (
    <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex items-center justify-between">

          <button
            type="button"
            onClick={onBack}
            disabled={loading}
            className="text-sm text-white/50 transition hover:text-white disabled:opacity-40"
          >
            ← Back
          </button>


          <span className="text-xs font-medium tracking-widest text-white/40">
            04 / 04
          </span>

        </div>


        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-full rounded-full bg-purple-400" />

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="flex flex-1 flex-col justify-center py-12">


          <p className="text-sm font-medium text-purple-400">
            One last thing
          </p>


          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Where are you based?
          </h1>


          <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
            Add your location and contact information to
            complete your profile.
          </p>


          {/* =================================================
              FORM
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >


            {/* =================================================
                PHONE
            ================================================= */}

            <div>

              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Phone number
              </label>


              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={phone}
                maxLength={10}
                placeholder="10-digit phone number"
                autoComplete="tel"
                disabled={loading}
                onChange={handlePhoneChange}
                className={`w-full rounded-2xl border bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/25 ${
                  errors.phone
                    ? 'border-red-400/70'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />


              {/* Phone counter */}

              <div className="mt-2 flex justify-between">

                {errors.phone ? (

                  <p className="text-sm text-red-400">
                    {errors.phone}
                  </p>

                ) : (

                  <p className="text-xs text-white/30">
                    Enter your 10-digit phone number.
                  </p>

                )}

                <span className="text-xs text-white/30">
                  {phone.length}/10
                </span>

              </div>

            </div>


            {/* =================================================
                STATE
            ================================================= */}

            <div>

              <label
                htmlFor="state"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                State
              </label>


              <div className="relative">

                <select
                  id="state"
                  value={state}
                  disabled={loading}
                  onChange={handleStateChange}
                  className={`w-full appearance-none rounded-2xl border bg-[#111016] px-5 py-4 text-white outline-none transition ${
                    errors.state
                      ? 'border-red-400/70'
                      : 'border-white/10 focus:border-purple-400'
                  }`}
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#111016]"
                  >
                    Select your state
                  </option>


                  <option
                    value="Tripura"
                    className="bg-[#111016]"
                  >
                    Tripura
                  </option>


                  <option
                    value="Assam"
                    className="bg-[#111016]"
                  >
                    Assam
                  </option>


                  <option
                    value="Meghalaya"
                    className="bg-[#111016]"
                  >
                    Meghalaya
                  </option>


                  <option
                    value="WestBengal"
                    className="bg-[#111016]"
                  >
                    West Bengal
                  </option>

                </select>


                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40">
                  ↓
                </span>

              </div>


              {errors.state && (

                <p className="mt-2 text-sm text-red-400">
                  {errors.state}
                </p>

              )}

            </div>


            {/* =================================================
                CITY
            ================================================= */}

            <div>

              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                City
              </label>


              <div className="relative">

                <select
                  id="city"
                  value={city}
                  disabled={!state || loading}
                  onChange={(event) => {

                    setCity(event.target.value)

                    clearError('city')

                  }}
                  className={`w-full appearance-none rounded-2xl border bg-[#111016] px-5 py-4 text-white outline-none transition disabled:cursor-not-allowed disabled:opacity-40 ${
                    errors.city
                      ? 'border-red-400/70'
                      : 'border-white/10 focus:border-purple-400'
                  }`}
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#111016]"
                  >
                    {state
                      ? 'Select your city'
                      : 'Select state first'}
                  </option>


                  {availableCities.map((cityName) => (

                    <option
                      key={cityName}
                      value={cityName}
                      className="bg-[#111016]"
                    >
                      {cityName}
                    </option>

                  ))}

                </select>


                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40">
                  ↓
                </span>

              </div>


              {errors.city && (

                <p className="mt-2 text-sm text-red-400">
                  {errors.city}
                </p>

              )}

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >

              {loading ? (

                <>

                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />

                  Completing profile...

                </>

              ) : (

                'Complete signup'

              )}

            </button>

          </form>

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <p className="pb-4 text-center text-xs leading-5 text-white/30">
          You can update your profile information later.
        </p>

      </div>

    </main>
  )
}

export default DetailsStep
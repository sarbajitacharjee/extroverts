import { useEffect, useState } from 'react'

function ProfileStep({ onBack, onContinue, initialData }) {
  const [name, setName] = useState(initialData?.name || '')
  const [age, setAge] = useState(initialData?.age || '')
  const [pronouns, setPronouns] = useState(initialData?.pronouns || '')

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  /*
   * ---------------------------------------------------------
   * VALIDATION
   * ---------------------------------------------------------
   */

  const validate = () => {
    const newErrors = {}

    const trimmedName = name.trim()

    if (!trimmedName) {
      newErrors.name = 'Name is required.'
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    } else if (trimmedName.length > 50) {
      newErrors.name = 'Name must be 50 characters or less.'
    }

    if (!age.trim()) {
      newErrors.age = 'Age is required.'
    } else if (!/^\d+$/.test(age)) {
      newErrors.age = 'Age must contain numbers only.'
    } else {
      const numericAge = Number(age)

      if (numericAge < 18) {
        newErrors.age = 'You must be at least 18 years old.'
      } else if (numericAge > 100) {
        newErrors.age = 'Please enter a valid age.'
      }
    }

    if (!pronouns) {
      newErrors.pronouns = 'Please select your pronouns.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /*
   * ---------------------------------------------------------
   * FIELD VALIDATION
   * ---------------------------------------------------------
   */

  const validateName = (value) => {
    const trimmedValue = value.trim()

    if (!trimmedValue) {
      return 'Name is required.'
    }

    if (trimmedValue.length < 2) {
      return 'Name must be at least 2 characters.'
    }

    if (trimmedValue.length > 50) {
      return 'Name must be 50 characters or less.'
    }

    return ''
  }

  const validateAge = (value) => {
    if (!value.trim()) {
      return 'Age is required.'
    }

    if (!/^\d+$/.test(value)) {
      return 'Age must contain numbers only.'
    }

    const numericAge = Number(value)

    if (numericAge < 18) {
      return 'You must be at least 18 years old.'
    }

    if (numericAge > 100) {
      return 'Please enter a valid age.'
    }

    return ''
  }

  /*
   * ---------------------------------------------------------
   * INPUT HANDLERS
   * ---------------------------------------------------------
   */

  const handleNameChange = (event) => {
    const value = event.target.value.slice(0, 50)

    setName(value)

    if (errors.name) {
      setErrors((previous) => ({
        ...previous,
        name: validateName(value),
      }))
    }
  }

  const handleAgeChange = (event) => {
    // Numbers only
    const value = event.target.value.replace(/\D/g, '').slice(0, 3)

    setAge(value)

    if (errors.age) {
      setErrors((previous) => ({
        ...previous,
        age: validateAge(value),
      }))
    }
  }

  const handlePronounsChange = (event) => {
    const value = event.target.value

    setPronouns(value)

    if (errors.pronouns) {
      setErrors((previous) => ({
        ...previous,
        pronouns: '',
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

    // Simulate saving profile data
    await new Promise((resolve) => {
      setTimeout(resolve, 900)
    })

    setLoading(false)

    onContinue({
      name: name.trim(),
      age,
      pronouns,
    })
  }

  /*
   * ---------------------------------------------------------
   * CLEAR STALE ERRORS WHEN DATA IS RESTORED
   * ---------------------------------------------------------
   */

  useEffect(() => {
    setName(initialData?.name || '')
    setAge(initialData?.age || '')
    setPronouns(initialData?.pronouns || '')
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
            03 / 04
          </span>
        </div>

        {/* ---------------------------------------------------
            PROGRESS
        --------------------------------------------------- */}

        <div
          className="mt-5 h-1 overflow-hidden rounded-full bg-white/10 sm:mt-8"
          aria-label="Signup progress: step 3 of 4"
        >
          <div className="h-full w-3/4 rounded-full bg-purple-400 transition-all duration-500" />
        </div>

        {/* ---------------------------------------------------
            CONTENT
        --------------------------------------------------- */}

        <div className="flex flex-1 flex-col justify-center py-10 sm:py-16">

          <div>
            <p className="text-sm font-medium text-purple-400">
              Tell us about yourself
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl lg:text-5xl">
              Build your profile.
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/50 sm:mt-4 sm:text-base">
              Add a few details so we can help you connect with the right
              people and experiences.
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

            {/* NAME */}

            <div>
              <label
                htmlFor="profile-name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Name
              </label>

              <input
                id="profile-name"
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => {
                  setErrors((previous) => ({
                    ...previous,
                    name: validateName(name),
                  }))
                }}
                placeholder="Enter your name"
                autoComplete="name"
                maxLength={50}
                disabled={loading}
                className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 sm:px-5 sm:py-4 sm:text-base ${
                  errors.name
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />

              <div className="mt-2 flex items-start justify-between gap-3">
                <div className="min-h-[20px]">
                  {errors.name && (
                    <p className="text-xs leading-5 text-red-400 sm:text-sm">
                      {errors.name}
                    </p>
                  )}
                </div>

                <span className="shrink-0 text-[11px] text-white/25">
                  {name.length}/50
                </span>
              </div>
            </div>

            {/* AGE */}

            <div>
              <label
                htmlFor="profile-age"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Age
              </label>

              <input
                id="profile-age"
                type="text"
                inputMode="numeric"
                value={age}
                onChange={handleAgeChange}
                onBlur={() => {
                  setErrors((previous) => ({
                    ...previous,
                    age: validateAge(age),
                  }))
                }}
                placeholder="Enter your age"
                autoComplete="bday"
                maxLength={3}
                disabled={loading}
                className={`w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 sm:px-5 sm:py-4 sm:text-base ${
                  errors.age
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />

              <div className="min-h-[20px]">
                {errors.age ? (
                  <p className="mt-2 text-xs leading-5 text-red-400 sm:text-sm">
                    {errors.age}
                  </p>
                ) : (
                  <p className="mt-2 text-xs leading-5 text-white/30">
                    You must be 18 or older to join.
                  </p>
                )}
              </div>
            </div>

            {/* PRONOUNS */}

            <div>
              <label
                htmlFor="profile-pronouns"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Pronouns
              </label>

              <select
                id="profile-pronouns"
                value={pronouns}
                onChange={handlePronounsChange}
                onBlur={() => {
                  setErrors((previous) => ({
                    ...previous,
                    pronouns: pronouns ? '' : 'Please select your pronouns.',
                  }))
                }}
                disabled={loading}
                className={`w-full appearance-none rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition sm:px-5 sm:py-4 sm:text-base ${
                  pronouns ? 'text-white' : 'text-white/25'
                } ${
                  errors.pronouns
                    ? 'border-red-400/70 focus:border-red-400'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              >
                <option value="" disabled className="bg-[#121018]">
                  Select your pronouns
                </option>

                <option value="he/him" className="bg-[#121018]">
                  He / Him
                </option>

                <option value="she/her" className="bg-[#121018]">
                  She / Her
                </option>

                <option value="they/them" className="bg-[#121018]">
                  They / Them
                </option>

                <option value="prefer-not-to-say" className="bg-[#121018]">
                  Prefer not to say
                </option>
              </select>

              <div className="min-h-[20px]">
                {errors.pronouns && (
                  <p className="mt-2 text-xs leading-5 text-red-400 sm:text-sm">
                    {errors.pronouns}
                  </p>
                )}
              </div>
            </div>

            {/* CONTINUE */}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 sm:py-4"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                  Saving...
                </>
              ) : (
                'Continue'
              )}
            </button>
          </form>
        </div>

        {/* ---------------------------------------------------
            FOOTER
        --------------------------------------------------- */}

        <p className="pb-2 text-center text-[11px] leading-5 text-white/30 sm:pb-4 sm:text-xs">
          You can update your profile details later.
        </p>
      </div>
    </main>
  )
}

export default ProfileStep
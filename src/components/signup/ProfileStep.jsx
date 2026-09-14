import { useState } from 'react'

function ProfileStep({ onBack, onContinue, initialData }) {
  const [name, setName] = useState(initialData?.name || '')
  const [age, setAge] = useState(initialData?.age || '')
  const [pronouns, setPronouns] = useState(
    initialData?.pronouns || ''
  )

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    /* Name */

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }


    /* Age */

    if (!age) {
      newErrors.age = 'Please enter your age.'
    } else if (!/^\d+$/.test(age)) {
      newErrors.age = 'Age must contain numbers only.'
    } else if (Number(age) < 18) {
      newErrors.age = 'You must be 18 or older to continue.'
    } else if (Number(age) > 100) {
      newErrors.age = 'Please enter a valid age.'
    }


    /* Pronouns */

    if (!pronouns) {
      newErrors.pronouns = 'Please select your pronouns.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }


  const handleContinue = (event) => {
    event.preventDefault()

    if (!validate()) {
      return
    }

    onContinue({
      name: name.trim(),
      age,
      pronouns,
    })
  }


  const clearError = (field) => {
    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: '',
      }))
    }
  }


  return (
    <main className="min-h-screen bg-[#08070c] px-6 py-8 text-white">

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col">

        {/* Header */}

        <div className="flex items-center justify-between">

          <button
            type="button"
            onClick={onBack}
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back
          </button>

          <span className="text-xs font-medium tracking-widest text-white/40">
            03 / 04
          </span>

        </div>


        {/* Progress */}

        <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-3/4 rounded-full bg-purple-400" />

        </div>


        {/* Main Content */}

        <div className="flex flex-1 flex-col justify-center py-12">

          <p className="text-sm font-medium text-purple-400">
            Tell us about yourself
          </p>


          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's get to know you.
          </h1>


          <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
            Add a few details to personalize your experience.
          </p>


          <form
            onSubmit={handleContinue}
            className="mt-10 space-y-6"
          >

            {/* NAME */}

            <div>

              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Your name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                maxLength={50}
                placeholder="Enter your name"
                autoComplete="name"
                onChange={(event) => {
                  setName(event.target.value)
                  clearError('name')
                }}
                className={`w-full rounded-2xl border bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/25 ${
                  errors.name
                    ? 'border-red-400/70'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name}
                </p>
              )}

            </div>


            {/* AGE */}

            <div>

              <label
                htmlFor="age"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Age
              </label>

              <input
                id="age"
                type="text"
                inputMode="numeric"
                value={age}
                maxLength={3}
                placeholder="Enter your age"
                onChange={(event) => {

                  const value = event.target.value

                  if (!/^\d*$/.test(value)) {
                    return
                  }

                  setAge(value)
                  clearError('age')

                }}
                className={`w-full rounded-2xl border bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/25 ${
                  errors.age
                    ? 'border-red-400/70'
                    : 'border-white/10 focus:border-purple-400'
                }`}
              />

              {errors.age && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.age}
                </p>
              )}

            </div>


            {/* PRONOUNS */}

            <div>

              <label
                htmlFor="pronouns"
                className="mb-2 block text-sm font-medium text-white/80"
              >
                Pronouns
              </label>

              <div className="relative">

                <select
                  id="pronouns"
                  value={pronouns}
                  onChange={(event) => {
                    setPronouns(event.target.value)
                    clearError('pronouns')
                  }}
                  className={`w-full appearance-none rounded-2xl border bg-[#111016] px-5 py-4 text-white outline-none transition ${
                    errors.pronouns
                      ? 'border-red-400/70'
                      : 'border-white/10 focus:border-purple-400'
                  }`}
                >

                  <option
                    value=""
                    disabled
                    className="bg-[#111016]"
                  >
                    Select your pronouns
                  </option>

                  <option
                    value="he/him"
                    className="bg-[#111016]"
                  >
                    He / Him
                  </option>

                  <option
                    value="she/her"
                    className="bg-[#111016]"
                  >
                    She / Her
                  </option>

                  <option
                    value="they/them"
                    className="bg-[#111016]"
                  >
                    They / Them
                  </option>

                  <option
                    value="other"
                    className="bg-[#111016]"
                  >
                    Other
                  </option>

                  <option
                    value="prefer-not-to-say"
                    className="bg-[#111016]"
                  >
                    Prefer not to say
                  </option>

                </select>

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40">
                  ↓
                </span>

              </div>

              {errors.pronouns && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.pronouns}
                </p>
              )}

            </div>


            {/* CONTINUE */}

            <button
              type="submit"
              className="w-full rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Continue
            </button>

          </form>

        </div>


        {/* Footer */}

        <p className="pb-4 text-center text-xs leading-5 text-white/30">
          You can update your profile information later.
        </p>

      </div>

    </main>
  )
}

export default ProfileStep
/**
 * Returns the sum of the digits of a number. (defaults to base ten)
 *
 * @param physicalAge The age in years
 */
export const physicalToMental = (physicalAge: number, base = 10) => {
  let mentalAge = 0
  while (physicalAge > 0) {
    mentalAge += physicalAge % base
    physicalAge = Math.floor(physicalAge / base)
  }
  return mentalAge
}

/**
 * Returns the smallest number whose sum of digits (defaults to base ten) is the
 * target.
 *
 * @param mentalAge The target number
 * @param base The base of the number.
 */
export const mentalToPhysical = (mentalAge: number, base = 10) => {
  const msd = mentalAge % (base - 1)
  const numNines = Math.floor(mentalAge / (base - 1))

  return (msd + 1) * Math.pow(base, numNines) - 1
}

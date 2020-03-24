/**
 * Returns the sum of the digits of a number. (defaults to base ten)
 *
 * @param physicalAge The age in years
 */
export const physicalToMental = ((base = 10) => {
  const mental: number[] = []
  for (let i = 0; i < base; i++) {
    mental[i] = i
  }
  mental[NaN] = 0

  /** This is recursive */
  const rec = (physical: number) => {
    if (!mental[physical] && mental[physical] !== 0) {
      console.log(`calculating ${physical}, ${mental[physical]}`)
      mental[physical] = rec(Math.floor(physical / base)) + (physical % base)
    }
    return mental[physical]
  }

  // pre-calculate
  for (let i = 0; i < 2000; i++) {
    rec(i)
  }

  return rec
})()

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

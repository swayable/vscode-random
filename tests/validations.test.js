import {
  isNumber,
  isValid,
  isValidIntRange,
  isStringWithComma,
} from '../src/validations'

describe('>>>>> Validator Functions Tests', () => {
  describe('.isNumber', () => {
    it('validates a number', () => {
      const valueToTest = 11

      expect(isNumber(valueToTest)).toBeTruthy()
    })

    it('validates a string with a number', () => {
      const valueToTest = '11'

      expect(isNumber(valueToTest)).toBeTruthy()
    })

    it('don\'t validate an empty string', () => {
      const valueToTest = ''

      expect(isNumber(valueToTest)).toBeFalsy()
    })

    it('don\'t validate a string with characters', () => {
      const valueToTest = 'a11'

      expect(isNumber(valueToTest)).toBeFalsy()
    })

    it('don\'t validate a boolean', () => {
      const valueToTest = 'false'

      expect(isNumber(valueToTest)).toBeFalsy()
    })
  })

  describe('.isValid', () => {
    it('returns false if input value is null', () => {
      const valueToTest = null

      expect(isValid(valueToTest)).toBeFalsy()
    })

    it('returns false if input value is undefined', () => {
      const valueToTest = undefined

      expect(isValid(valueToTest)).toBeFalsy()
    })

    it('returns false if input value is an empty string', () => {
      const valueToTest = ''

      expect(isValid(valueToTest)).toBeFalsy()
    })

    it('validates a non empty string', () => {
      const valueToTest = 'true value'

      expect(isValid(valueToTest)).toBeTruthy()
    })

    describe('when maxLength is specified', () => {
      it('return false if string has length greater than maxLength', () => {
        const valueToTest = 'true value greater'

        expect(isValid(valueToTest, 10)).toBeFalsy()
      })

      it('validates a non empty string with length equal to maxLength', () => {
        const valueToTest = 'true value'

        expect(isValid(valueToTest, 10)).toBeTruthy()
      })

      it('validates a non empty string with length less than maxLength', () => {
        const valueToTest = 'true val'

        expect(isValid(valueToTest, 10)).toBeTruthy()
      })
    })
  })

  describe('.isValidIntRange', () => {
    it('don\'t validate an empty string', () => {
      const valueToTest = ''

      expect(isValidIntRange(valueToTest)).toBeFalsy()
    })

    it('don\'t validate a range with only one value', () => {
      const valueToTest = '12-'

      expect(isValidIntRange(valueToTest)).toBeFalsy()
    })

    it('don\'t validate a range with characters', () => {
      const valueToTest = '12-1234a'

      expect(isValidIntRange(valueToTest)).toBeFalsy()
    })

    it('don\'t validate a range with the first number greater than the second', () => {
      const valueToTest = '32-16'

      expect(isValidIntRange(valueToTest)).toBeFalsy()
    })

    it('validate a range with two numbers', () => {
      const valueToTest = '1-25'

      expect(isValidIntRange(valueToTest)).toBeTruthy()
    })

    it('don\'t validate a range with unsigned numbers', () => {
      const valueToTest = '-2--1'

      expect(isValidIntRange(valueToTest)).toBeFalsy()
    })
  })

  describe('.isStringWithComma', () => {
    it('validates strings containing two comma-separated values', () => {
      const valueToTest = '1,2'

      expect(isStringWithComma(valueToTest)).toBeTruthy()
    })

    it('validates strings containing several comma-separated values', () => {
      const valueToTest = 'a, b,c'

      expect(isStringWithComma(valueToTest)).toBeTruthy()
    })

    it('validates strings containing all commas', () => {
      const valueToTest = ',,,,,,'

      expect(isStringWithComma(valueToTest)).toBeTruthy()
    })

    it('returns false if input value has no commas', () => {
      const valueToTest = 'a bc !def '
      expect(isStringWithComma(valueToTest)).toBeFalsy()
    })

    it('returns false if input value is an empty string', () => {
      const valueToTest = ''

      expect(isStringWithComma(valueToTest)).toBe(false)
    })

    it('returns false if input value is a number', () => {
      const valueToTest = 123

      expect(isStringWithComma(valueToTest)).toBe(false)
    })

    it('returns false if input value is null', () => {
      const valueToTest = null

      expect(isStringWithComma(valueToTest)).toBe(false)
    })

    it('returns false if input value is undefined', () => {
      const valueToTest = undefined

      expect(isStringWithComma(valueToTest)).toBe(false)
    })
  })
})

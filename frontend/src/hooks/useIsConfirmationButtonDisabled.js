import { useEffect, useState } from "react"

export default function useIsConfirmationButtonDisabled(options) {
  const [isConfirmationButtonDisabled, setIsConfirmationButtonDisabled] = useState(true)

  useEffect(() => {
    const checkIfConfirmationButtonShouldBeDisabled = () => {
      const validator = options.map(option => (
        Object.keys(option).length === 0 ? 'disabled' : 'enabled'
      ))
      const isDisabled = validator.includes('disabled')

      setIsConfirmationButtonDisabled(isDisabled)
    }

    checkIfConfirmationButtonShouldBeDisabled()
  }, [options])

  return isConfirmationButtonDisabled
}

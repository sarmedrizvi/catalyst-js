import { SignOutButton } from '@clerk/nextjs'
import { DropdownLabel } from './dropdown'

const SignOut = () => {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <DropdownLabel>Sign out</DropdownLabel>
    </SignOutButton>
  )
}

export default SignOut

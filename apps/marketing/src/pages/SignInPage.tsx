import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl={window.origin.toString() + "/dashboard"} />
);

export default SignInPage;
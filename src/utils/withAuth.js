import { auth } from "@clerk/nextjs/server";

export function withAuth(WrappedComponent) {
  return async function AuthenticatedComponent(props) {
    const { isAuthenticated } = await auth();

    if (!isAuthenticated) {
      return (
        <div className="w-full fixed top-30 bg-sliced-blue text-white p-4 text-2xl text-center">
          Sign in to view this page
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

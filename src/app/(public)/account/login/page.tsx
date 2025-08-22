"use client";
import AuthForm from "@/components/common/auth/AuthForm";
import BreadCrumb from "@/components/layouts/BreadCrumb";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <BreadCrumb
        title="Create Account"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Create Account" }]}
      />
      <AuthForm
        title="Login"
        subtitle="Please login using account detail below."
        fields={[
          { label: "Email", type: "email", name: "email" },
          { label: "Password", type: "password", name: "password" },
        ]}
        submitLabel="Sign In"
        onSubmit={handleLogin}
        secondaryLink={{ label: "Create account", href: "/account/register" }}
        extraLink={{ label: "Forgot your password?", href: "/forgot-password" }}
      />
    </>
  );
}

"use client";
import AuthForm from "@/components/common/auth/AuthForm";
import NavigationBanner from "@/components/common/NavigationBanner";

export default function RegisterPage() {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <NavigationBanner
        title="Create Account"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Create Account" }]}
      />
      <AuthForm
        title="Create Account"
        subtitle="Please register using account detail below."
        fields={[
          { label: "First Name", type: "text", name: "firstName" },
          { label: "Last Name", type: "text", name: "lastName" },
          { label: "Email", type: "email", name: "email" },
          { label: "Password", type: "password", name: "password" },
        ]}
        submitLabel="Create"
        onSubmit={handleRegister}
        secondaryLink={{ label: "Return to Store", href: "/" }}
      />
    </>
  );
}

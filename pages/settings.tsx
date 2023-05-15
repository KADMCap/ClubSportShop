import { Layout } from "@/components/Layout";
import { ChangePassword } from "@/components/Settings/ChangePassword";
import { PersonalData } from "@/components/Settings/PersonalData";
import { ShippingAddresses } from "@/components/Settings/ShippingAddresses";
import { UISettings } from "@/components/Settings/UISettings";

export default function SettingsPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <p className="py-4 font-semibold text-md">Settings</p>
        <section className="flex flex-col w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
          <div className="flex flex-col items-center w-full gap-4 md:flex-row">
            <PersonalData />
            <ChangePassword />
          </div>
          <UISettings />
          <ShippingAddresses />
        </section>
        <br />
      </div>
    </Layout>
  );
}

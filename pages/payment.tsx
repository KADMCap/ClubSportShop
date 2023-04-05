import { Layout } from "@/components/Layout";
import { PaymentStep } from "@/components/PaymentForm/PaymentStep";
import { ShippingForm } from "@/components/PaymentForm/ShippingForm";
import { SummaryForm } from "@/components/PaymentForm/SummaryForm";
import { useRouter } from "next/router";

export default function PaymentPage() {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex flex-col w-full gap-4">
        <div className="text-xl">Order Summary</div>
        <PaymentStep />
        {router.query.step === "1" && <SummaryForm />}
        {router.query.step === "2" && <ShippingForm />}
      </div>
    </Layout>
  );
}

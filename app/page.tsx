import Button from "@/components/Button";
import Display from "@/components/Display/Display";
import InputCont from "@/components/Inputs/InputCont";

export default function Home() {
  return (
    <main className="max-w-2xl w-full sm:px-16 px-10 py-10 m-auto rounded-ee-[18rem] rounded-md flex flex-col gap-6 relative bg-OffWhite">
      <InputCont />
      <Button />
      <Display />
    </main>
  );
}

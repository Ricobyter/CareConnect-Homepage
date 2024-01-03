import Button from "../components/Button"


const Subscribe = () => {
  return (
<section className="max-container max-lg:flex-col flex justify-between items-center gap-10" id="contact us">
<h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">Feedbacks
  <span className="text-coral-red"> & </span> Reviews
</h3>
<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
  <input type="text" placeholder="Write your Feedbacks" className="input" />
  <div className="flex max-sm:justify-end items-center max-sm:w-full">
    <Button label="Send"/>

  </div>
</div>
</section>
  )
}

export default Subscribe

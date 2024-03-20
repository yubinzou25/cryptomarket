
function WhyChoose() {
  return (
    <div className="flex flex-col space-y-20">
        <div className="text-3xl lg:text-4xl font-semibold">
            Why Choose DigiFinex
        </div>
        <div className="flex flex-row">
            <Card iconUrl="image/safety.svg"/>
            <Card iconUrl="image/service.svg"/>
            <Card iconUrl="image/simplicity.svg"/>
            <Card iconUrl="image/smile.svg"/>
        </div>
    </div>
  )
}
function Card({iconUrl}:{iconUrl:string}){
    return (
        <div className="flex flex-row w-1/4 space-x-5">
            <div>
                <div
                    className="bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${iconUrl}")`,
                        width: "20px",
                        height: "20px",
                    }}
                    />
                </div>
            <div>
                <div className="text-xl lg:text-2xl font-semibold mb-5">
                    Safety
                </div>
                <div>
                    Since 2017, DigiFinex has been operating stably and reliably with our self-developed system.
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
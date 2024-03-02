import React from 'react'

function WhyChoose() {
  return (
    <div className="flex flex-col space-y-20">
        <div className="text-3xl lg:text-4xl font-semibold">
            Why Choose DigiFinex
        </div>
        <div className="flex flex-row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
function Card(){
    return (
        <div className="flex flex-row w-1/4 space-x-5">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="dui-icon" fill="currentcolor" color="#0C0F0F"><path fillRule="evenodd" clipRule="evenodd" d="M11.695.443c.202-.028.407-.028.61 0 .232.032.45.11.634.175l.048.017 6.032 2.136.144.051c.698.246 1.294.456 1.754.84.406.337.724.768.921 1.258.227.562.226 1.188.225 1.886V12.037c0 3.026-1.741 5.537-3.603 7.369-1.879 1.848-4.027 3.153-5.162 3.778l-.045.024c-.21.117-.467.26-.806.328a2.406 2.406 0 01-.894 0c-.34-.069-.597-.211-.806-.328l-.045-.024c-1.135-.625-3.283-1.93-5.162-3.778-1.862-1.832-3.603-4.342-3.603-7.369v-5.08-.151c0-.698-.002-1.324.225-1.886.197-.49.515-.92.92-1.258.461-.384 1.057-.594 1.755-.84l.144-.051L11.013.635l.048-.017c.184-.066.402-.143.634-.175zm.294 2.105a7.136 7.136 0 00-.266.09L5.69 4.774c-.924.327-1.12.414-1.249.52a1.065 1.065 0 00-.31.42c-.051.128-.07.302-.07 1.242v5.081c0 2.19 1.271 4.184 2.969 5.854 1.68 1.654 3.64 2.85 4.696 3.432a12.075 12.075 0 00.234.124.48.48 0 00.012.005.4.4 0 00.054 0 11.324 11.324 0 00.245-.13c1.057-.582 3.016-1.777 4.697-3.431 1.698-1.67 2.968-3.664 2.968-5.854v-5.08c0-.941-.018-1.115-.07-1.243a1.064 1.064 0 00-.31-.42c-.128-.106-.324-.193-1.248-.52l-6.032-2.136a7.241 7.241 0 00-.266-.09h-.022z" fill="#78808D"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.71 8.12c.403.427.384 1.1-.043 1.502l-5.063 4.782c-.409.386-1.05.386-1.458 0l-2.25-2.125a1.062 1.062 0 111.459-1.545l1.52 1.436 4.333-4.092a1.063 1.063 0 011.502.043z" fill="#00D5C8"></path></svg>
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
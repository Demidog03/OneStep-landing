import { FC } from 'react'
import womanBg from '../../../assets/womanBg.png'

const Welcome: FC = () => {
  return (
      <section className="h-dvh w-full relative">
        <img
            src={womanBg}
            className="h-full w-full object-cover absolute top-0 object-top animate-[blurImageOut_2s_ease-out] saturate-120"
            alt="woman_watching_laptop"
        />
        <div className="w-full h-full absolute z-1 bg-gradient-to-r from-transparent from-10% via-transparent via-50% to-[#102844] to-100%"></div>
        <div className="relative z-2 w-full h-full flex flex-col justify-center items-end px-[120px] text-left">
          <div className="text-center text-white">
            <h1 className="font-bold text-8xl drop-shadow-textBlue animate__animated animate__fadeIn  animate__delay-1s">
              One
              <span className="text-[#a3cef1] animate__animated animate__fadeIn animate__delay-1s animate__slower">Step</span>
            </h1>
            <p className="font-bold text-[1.5rem] drop-shadow-textBlue animate__animated animate__fadeInUp animate__delay-2s animate__slower">На шаг ближе к мечте</p>
          </div>
        </div>
      </section>
  )
}

export default Welcome

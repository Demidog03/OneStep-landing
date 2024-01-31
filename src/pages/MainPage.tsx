import {FC} from 'react'
import Welcome from '../module/welcome/ui/Welcome.tsx'

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = () => {
  return (
      <div>
        <Welcome/>
      </div>
  )
}

export default MainPage

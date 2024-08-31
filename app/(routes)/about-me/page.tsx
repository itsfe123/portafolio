import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import Avatar from "@/components/avatar"; // Import the Avatar component
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 ">toda mi <span className="font-bold text-secondary">trayectoria profecional</span></h1> <CounterServices />

        <TimeLine />
      </ContainerPage>
    </>
  )
}

export default PageAboutMe;
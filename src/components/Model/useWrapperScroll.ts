import { useMotionValue } from "framer-motion";
import { useContext ,useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll(){

  const {wrappersRef} = useContext(ModelsContext)

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrappersRef.current

    if(element){
      const updateScrollValue = () => {

          const { scrollTop, scrollHeight,offsetHeight} = element;

          const fullScroll = scrollHeight - offsetHeight 
          
          scrollY.set(scrollTop) 

          scrollYProgress.set( scrollTop / fullScroll) 
      }

      element?.addEventListener('scroll', updateScrollValue);

        return ( ) => element?.removeEventListener('scroll', updateScrollValue);
      
    }

  },[scrollY, scrollYProgress, wrappersRef])

  return{ scrollY, scrollYProgress} 
}
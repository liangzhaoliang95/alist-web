import { Box, useColorModeValue } from "@hope-ui/solid"
import CornerBottom from "./CornerBottom"
import CornerTop from "./CornerTop"

const LoginBg = () => {
  const bgColor = useColorModeValue("#a9c6ff", "#062b74")
  return (
    <Box
      style="background-image:url(http://www.bing.com/th?id=OHR.HonaunauNP_ZH-CN4491662962_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp)"
      bgColor={bgColor()}
      pos="fixed"
      top="0"
      left="0"
      overflow="hidden"
      zIndex="-1"
      w="100vw"
      h="100vh"
    >
      <Box
        pos="absolute"
        right={{
          "@initial": "-100px",
          "@sm": "-300px",
        }}
        top={{
          "@initial": "-1170px",
          "@sm": "-900px",
        }}
      >
        {/*<CornerTop />*/}
      </Box>
      <Box
        pos="absolute"
        left={{
          "@initial": "-100px",
          "@sm": "-200px",
        }}
        bottom={{
          "@initial": "-760px",
          "@sm": "-400px",
        }}
      >
        {/*<CornerBottom />*/}
      </Box>
    </Box>
  )
}

export default LoginBg

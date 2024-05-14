import { Box, ChakraProvider } from "@chakra-ui/react"
import { compile } from "@onedoc/react-print"

export const chakraToHtml =async ({chakraCode})=> {
    console.log(chakraCode)
    return await compile(
        <ChakraProvider>
          <Box>hiii</Box>
        </ChakraProvider>,{emotion:true}
    )
}
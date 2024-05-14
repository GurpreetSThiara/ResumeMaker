import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react"
import { useState } from "react"

function CustomSliderMark({setHeightVal}) {
    const [sliderValue, setSliderValue] = useState(25)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box p={4} pt={6}>
        
        <Slider max={20} min={10} aria-label='slider-ex-6' onChange={(val) => {setSliderValue(val)
          setHeightVal(val)
        }}>
          <SliderMark value={25} {...labelStyles}>
            25%
          </SliderMark>
       
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }

  export default CustomSliderMark
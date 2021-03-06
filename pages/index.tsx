import { useCallback, useMemo, useState } from "react";

import { Button, Flex } from "components/atoms"
import Head from "next/head"
import pcaResult from "public/pca-result.json"
import { VictoryChart, VictoryScatter, VictoryTheme } from "victory"


type RefinedPlayer = typeof pcaResult.data[0] & {symbol?: string}; 
enum ColorTarget {
  TEAM = "Team",
  POSITION = "Position",
}

export default function Home() {

  const [colorTarget, setColorTarget] = useState<ColorTarget>(ColorTarget.TEAM);

  const handleColorButtonClick = useCallback((newColorTarget: ColorTarget)=>{
    if (newColorTarget === ColorTarget.TEAM){
      setColorTarget(ColorTarget.TEAM)
    }
    else if (newColorTarget === ColorTarget.POSITION){
      setColorTarget(ColorTarget.POSITION)
    }
  }, [])

  // const refinedData = useMemo(()=>{
  //   let newRefinedData: RefinedPlayer[] = []
  //   newRefinedData = pcaResult.data.map(eachPlayer => {
  //     const newEachPlayer:RefinedPlayer = eachPlayer;
  //     newEachPlayer["symbol"] = "circle"
  //     if (newEachPlayer["포지션"]=== "MF") {
  //       newEachPlayer["symbol"] = "diamond"
  //     }
  //     else if (newEachPlayer["포지션"] === "FW") {
  //       newEachPlayer["symbol"] = "triangleUp"
  //     }
  //     else if (newEachPlayer["포지션"] === "DF") {
  //       newEachPlayer["symbol"] = "triangleDown"
  //     }
  //     else if (newEachPlayer["포지션"] === "GK") {
  //       newEachPlayer["symbol"] = "square"
  //     }
  //     return newEachPlayer;
  //   })

  //   return newRefinedData
  // }, []);
  
  const decideFill = useCallback(({ datum })=>{
    if (colorTarget === ColorTarget.TEAM){
      if (datum["team"] === "JS"){
        return "orange"
      }
      else if (datum["team"] === "MT"){
        return "green"
      }
      else if (datum["team"] === "AN"){
        return "red"
      }
      else {
        return "white"
      }
    }
    else if (colorTarget === ColorTarget.POSITION){
      if (datum["포지션"] === "MF"){
        return "yellow"
      }
      else if (datum["포지션"] === "DF"){
        return "green"
      }
      else if (datum["포지션"] === "FW"){
        return "red"
      }
      else if (datum["포지션"] === "GK"){
        return "black"
      }
      else {
        return "white"
      }
    }
    else {
      return "white"
    }
  }, [colorTarget])
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex>

        <Flex>
          <Button
            onClick={()=>handleColorButtonClick(ColorTarget.TEAM)}
          >change to {ColorTarget.TEAM} </Button>
          <Button
            onClick={()=>handleColorButtonClick(ColorTarget.POSITION)}
          >change to {ColorTarget.POSITION} </Button>
        </Flex>

        <Flex
          sx={{width:["100%", null, "800px"]}}
        >
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [-6, 10], y: [-8, 8] }}
          >

            <VictoryScatter
              style={{ 
                data: { fill: decideFill },  
                labels: { fontSize: 4},
              }}
              size={2}
              x="0"
              y="1"
              data={pcaResult.data}
              //labels={({ datum }) => `${datum["team"]} ${datum["no."]}`}
            />
  
          </VictoryChart>
        </Flex>

      </Flex>
    </>
    
  )
}

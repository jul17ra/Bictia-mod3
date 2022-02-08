const express = require('express')
const cors = require('cors')
const {getAirQualityIndexFromUSB, getAirQualityIndexFromThirdPartyService } = require('./helpers/airQualityIndexService')

const app = express()
const port = 3030

app.get("/aqi/",cors(), express.json(), async (req,res)=>{
  const { uid } = req.query;
  res.send(
    {
      aqiFromUSB:getAirQualityIndexFromUSB(),
      aqiFromThirdPartyService: await getAirQualityIndexFromThirdPartyService(uid)
    }
  )
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`) //root -> localhost:3030
})
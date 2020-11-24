const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const { google } = require('googleapis')

const CREDENTIAL_PATH =
  process.env.CREDENTIAL_PATH ||
  path.join(__dirname, 'keys', 'credentials.json')
const TOKEN_PATH =
  process.env.TOKEN_PATH ||
  path.join(path.dirname(CREDENTIAL_PATH), 'token.json')
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || ''
const WORKSHEET_NAME = process.env.WORKSHEET_NAME || 'x'

if (SPREADSHEET_ID.length === 0) {
  process.exit(-1)
}

const content = fs.readFileSync(CREDENTIAL_PATH)
const credentials = JSON.parse(content)
const clinetSecret = credentials.web.client_secret
const clientId = credentials.web.client_id
const redirectUris = credentials.web.redirect_uris
const oAuth2Client = new google.auth.OAuth2(
  clientId,
  clinetSecret,
  redirectUris[0]
)
const token = fs.readFileSync(TOKEN_PATH)
oAuth2Client.setCredentials(JSON.parse(token))

function writeData(auth, data, cb) {
  const sheets = google.sheets({ version: 'v4', auth })
  sheets.spreadsheets.values.append(
    {
      spreadsheetId: SPREADSHEET_ID,
      range: `${WORKSHEET_NAME}!A2`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'OVERWRITE',
      resource: {
        values: [
          [
            data.locationName,
            data.dateString,
            data.reporterName,
            data.longitude,
            data.latitude,
            data.memo,
            new Date().getTime(),
          ],
        ],
      },
    },
    (err, res) => {
      if (err) {
        cb(err, null)
      } else {
        const rows = res.data.values
        cb(null, rows)
      }
    }
  )
}

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', function (req, res) {
  writeData(oAuth2Client, req.body, function (err, data) {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
})

module.exports = {
  path: '/api/',
  handler: app,
}

import {GoogleSpreadsheet} from 'google-spreadsheet';
import credentials from '../../credentials/google-sheets-api.json';

export default async function (req, res) {
  const doc = new GoogleSpreadsheet(
    '11tVlIEVFlw48ayBgZtHwb7RF8U5_Z8qS7JjAwR7WdU0'
  );

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });

  await doc.loadInfo(); //load sheet data

  const sheet = doc.sheetsByIndex[0];

  const rows = await sheet.getRows();

  const games = rows.map(({name, image}) => {
    return {
      name,
      image,
    };
  });

  res.send({
    title: doc.title,
    totalGames: sheet.rowCount,
    games,
  });
}

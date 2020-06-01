
import * as fs from 'fs';
import usNavyAirDecompressionTable from '../tables/usnavy-deco-rev7';
import usNavyNoDecoRepetGroup from '../tables/usnavy-nodeco-rev7';
import privateusNavyRepetGroupLetter from '../tables/usnavy-repetGroupLetter';
import usNavyResidualNitrogenTime from '../tables/usnavy-rnt';

export const createFile = (filename: string, table: any) => {
    fs.writeFile(
      filename, 
      JSON.stringify(table), 
      function (err: any) {
        if (err) {
          return console.error(err);
        }
        console.log("File created!");
    });
  }

createFile('usnavy-air-deco-rev7.json', usNavyAirDecompressionTable)
createFile('usnavy-air-nodeco-rev7.json', usNavyNoDecoRepetGroup)
createFile('usnavy-air-repetgroup-rev7.json', privateusNavyRepetGroupLetter)
createFile('usnavy-air-rnt-rev7.json', usNavyResidualNitrogenTime)
import Fs from "fs";


// const data={
//     title:"topic1",
//     niche:"description1"
// }


// const JSONstrData =JSON.stringify(data);
// Fs.writeFileSync('1-JSON.json',JSONstrData);

// reading file 
// const Bdata=Fs.readFileSync('1-JSON.json');
// const JSONdata=Bdata.toString();
// const jsData=JSON.parse(JSONdata);
// console.log(jsData.title);


const JSONBdata=Fs.readFileSync('1-JSON.json');
const JsObj=JSON.parse(JSONBdata);
JsObj.Name="siva";
const JSONdata=JSON.stringify(JsObj);
Fs.writeFileSync('1-JSON.json',JSONdata);

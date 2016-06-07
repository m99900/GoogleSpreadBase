function server(wich, update, roomtype) { 
var server = {
getroom:function(Z) {
//this is one of the most vauble of the classfunctions
var sheet = SpreadsheetApp.openById("1Z4gmv82SSCv760CVF2RDGiykz23gnvEmzmrKE4b7mVY").getSheets()[0];
var data = sheet.getDataRange().getValues();
var z = Z;
var x = [];
while (((data[z][0] !== 'roomt1' && data[z][0] !== 'roomt2') && data[z][0] !== 'roomt3')) {
z--;
}
x.push(z);
x.push(data[z][0]);
//z++; x.push(data[z]);
var R = 0;
if (data[z][1] !== 'roomt1') {
while (R !== 6) {
z++;
R++;
x.push(data[z]);
}
} else if (data[z][1] !== 'roomt2') {
while (R !== 4) {
z++;
R++;
x.push(data[z]);
}
} else if (data[z][1] !== 'roomt3') {

while (R !== 2) {
z++;
R++;
x.push(data[z]);
}
} else {
//NULNYbuwgbuwohbuo/wdnuw+qhuihfnwueigbhwei7gfeiuhg3q2iukeuowqhieuwhiwughiuewhfiuehwihfiuwehwebifwe7fghuiwefhiuwefhuwefhiuwefhuifheuiefhewiuhfuiwehfuiwehifwfhuiwfhiewuh
}

//Z is for what line you are in
return x
},
getline:function() {

var sheet = SpreadsheetApp.openById("1Z4gmv82SSCv760CVF2RDGiykz23gnvEmzmrKE4b7mVY").getSheets()[0];
  var data = sheet.getDataRange().getValues();
var x = 0;
while (x !== sheet.getLastRow()) {
x++;
if (data[x][0] == 0 || data[x][0] == '0') {
break;
}
}
Logger.log(x);
if (x == sheet.getLastRow()) {
x = null;
}
return x;
},
serverupdate:function(et) {
/*
et = array
REminder 
for battle
A = move used
B = health 
C = (mabye) team or turn
D = name
E = ability
*/
var sheet = SpreadsheetApp.openById("1Z4gmv82SSCv760CVF2RDGiykz23gnvEmzmrKE4b7mVY").getSheets()[0];
var t666 = ["A", Math.floor(et[0] + 1), ":", "E", Math.floor(et[0] + 1)].join("");
Logger.log(t666);

var range = sheet.getRange(t666);
var junck = et[1];
var junck2 = et[2];
var junck3 = et[3];
var test = [[junck, junck2, "", junck3, ""]];
range.setValues(test);
 SpreadsheetApp.flush();
},
servermakeroom:function(type) {
var sheet = SpreadsheetApp.openById("1Z4gmv82SSCv760CVF2RDGiykz23gnvEmzmrKE4b7mVY").getSheets()[0];
if (type == 1) {
sheet.appendRow(["roomt1"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["end"]);
} else if (type == 2) {
sheet.appendRow(["roomt2"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["end"]);
} else {
sheet.appendRow(["roomt2"]);
sheet.appendRow(["0"]);
sheet.appendRow(["0"]);
sheet.appendRow(["end"]);
}
 SpreadsheetApp.flush();
},
roomclear:function(roomtype) {
var sheet = SpreadsheetApp.openById("1Z4gmv82SSCv760CVF2RDGiykz23gnvEmzmrKE4b7mVY").getSheets()[0];
var t666 = ["A", Math.floor(roomtype[0] + 1), ":", "E", Math.floor(roomtype[0] + 1)].join("");
Logger.log(t666);
var range = sheet.getRange(t666);
var R = 0;
if (roomtype[1] == 'roomt1') {

while (R !== 6) {
R++
t666 = ["A", Math.floor(roomtype[0] + 1 + R), ":", "E", Math.floor(roomtype[0] + 1 + R)].join("");
range = sheet.getRange(t666);
range.setValues([['0', '', '', '', '']]) 
}
} else if (roomtype[1] == 'roomt2') {
while (R !== 4) {
R++
t666 = ["A", Math.floor(roomtype[0] + 1 + R), ":", "E", Math.floor(roomtype[0] + 1 + R)].join("");
range = sheet.getRange(t666);
range.setValues([['0', '', '', '', '']]) 
}

} else if (roomtype[1] == 'roomt3') {
while (R !== 6) {
R++;
t666 = ["A", Math.floor(roomtype[0] + 1 + R), ":", "E", Math.floor(roomtype[0] + 1 + R)].join("");
range = sheet.getRange(t666);
range.setValues([['0', '', '', '', '']]);
}
} else {

}
}
};   
if (wich == 1) {
return server.getroom(update);
} else if (wich == 2) {
return server.getline();
} else if (wich == 3) {
 server.serverupdate(update);
} else if (wich == 4) {
server.servermakeroom(roomtype);
} else {
server.roomclear(roomtype);
}
}

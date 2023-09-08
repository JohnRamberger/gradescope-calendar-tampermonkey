// ==UserScript==
// @name        Gradescope-Calendar
// @version     0.0.1
// @downloadURL https://openuserjs.org/src/scripts/KnowMoreStuff/Oh_Yes!.user.js
// @author      John Ramberger
// @description Add gradescope items to google calendar
// @match       http*://www.gradescope.com/courses/*
// @run-at      document-idle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant       none
// @require     https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js
// ==/UserScript==

// const x = require('https://cdn.jsdelivr.net/npm/ics@3.4.0/dist/defaults.min.js');

/*! ics.js Wed Aug 20 2014 17:23:02 */
// prettier-ignore
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);
// prettier-ignore
if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (
  typeof define !== "undefined" &&
  define !== null &&
  define.amd !== null
) {
  define("FileSaver.js", function () {
    return saveAs;
  });
}
// prettier-ignore
var ics=function(e,t){"use strict";{if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){void 0===e&&(e="default"),void 0===t&&(t="Calendar");var r=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",n=[],i=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(r),o=r+"END:VCALENDAR",a=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return n},calendar:function(){return i+r+n.join(r)+o},addEvent:function(t,i,o,l,u,s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if("YEARLY"!==s.freq&&"MONTHLY"!==s.freq&&"WEEKLY"!==s.freq&&"DAILY"!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if("[object Array]"!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e,t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l),d=new Date(u),f=new Date,S=("0000"+g.getFullYear().toString()).slice(-4),E=("00"+(g.getMonth()+1).toString()).slice(-2),v=("00"+g.getDate().toString()).slice(-2),y=("00"+g.getHours().toString()).slice(-2),A=("00"+g.getMinutes().toString()).slice(-2),T=("00"+g.getSeconds().toString()).slice(-2),b=("0000"+d.getFullYear().toString()).slice(-4),D=("00"+(d.getMonth()+1).toString()).slice(-2),N=("00"+d.getDate().toString()).slice(-2),h=("00"+d.getHours().toString()).slice(-2),I=("00"+d.getMinutes().toString()).slice(-2),R=("00"+d.getMinutes().toString()).slice(-2),M=("0000"+f.getFullYear().toString()).slice(-4),w=("00"+(f.getMonth()+1).toString()).slice(-2),L=("00"+f.getDate().toString()).slice(-2),O=("00"+f.getHours().toString()).slice(-2),p=("00"+f.getMinutes().toString()).slice(-2),Y=("00"+f.getMinutes().toString()).slice(-2),U="",V="";y+A+T+h+I+R!=0&&(U="T"+y+A+T,V="T"+h+I+R);var B,C=S+E+v+U,j=b+D+N+V,m=M+w+L+("T"+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B="rrule:FREQ="+s.freq,s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=";UNTIL="+x.substring(0,x.length-13).replace(/[-]/g,"")+"000000Z"}s.interval&&(B+=";INTERVAL="+s.interval),s.count&&(B+=";COUNT="+s.count),s.byday&&s.byday.length>0&&(B+=";BYDAY="+s.byday.join(","))}(new Date).toISOString();var H=["BEGIN:VEVENT","UID:"+n.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+i,"DTSTAMP;VALUE=DATE-TIME:"+m,"DTSTART;VALUE=DATE-TIME:"+C,"DTEND;VALUE=DATE-TIME:"+j,"LOCATION:"+o,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return B&&H.splice(4,0,B),H=H.join(r),n.push(H),H},download:function(e,t){if(n.length<1)return!1;t=void 0!==t?t:".ics",e=void 0!==e?e:"calendar";var a,l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf("MSIE 10"))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l),a=u.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(a,e+t),l},build:function(){return!(n.length<1)&&i+r+n.join(r)+o}}}console.log("Unsupported Browser")}};

let style = document.createElement("style");
style.innerHTML = `
  .th-checkbox {
    position: unset !important;
    width: unset !important;
    height: unset !important;
    margin: unset !important;
    padding: unset !important;
    overflow: unset !important;
    clip: unset !important;
    border: unset !important;
  }
  .gs-cal-button {
    width: fit-content !important;
    margin-top: 10px !important;
  }
  .courseHeader--cal-flex {
    display: flex !important;
    flex-direction: row !important;
    gap: 10px !important;
  }
`;

var courseNumber;
var courseName;
var courseNameClean;
var numCheckedOther = 0;
var numChecked = 0;

(function () {
  "use strict";

  // Your code here...
  // let cal = ics();

  // cal.addEvent('Test1', 'Test2', 'Test3', '2023-09-07T12:00:00', '2023-09-07T16:00:00');
  // cal.download();

  // add css
  document.body.appendChild(style);

  // get number from https://www.gradescope.com/courses/582541
  courseNumber = window.location.href.split("/")[4];

  courseName = document.querySelector(`.courseHeader--title`).textContent;
  courseNameClean = courseName.replace(/\s/g, "-").toLowerCase();

  // INJECTS

  let startState = JSON.parse(sessionStorage.getItem("gs-cal"));
  if (!startState) {
    startState = {};
  }
  if (!startState[courseNumber]) {
    startState[courseNumber] = {};
  }

  // --------------- Select assignment checkbox ---------------

  let tableRows = document.querySelectorAll("tbody > tr:nth-child(n)");

  let allChecked = true;
  let noneChecked = true;

  for (let tableRow of tableRows) {
    let th = tableRow.querySelector("th");
    let assignmentName = th.textContent;
    let assignmentNameClean = assignmentName.replace(/\s/g, "-").toLowerCase();

    let assignmentState = startState[courseNumber][assignmentNameClean];
    if (!assignmentState) {
      assignmentState = {};
    }
    let initialChecked = assignmentState["checked"] || false;
    allChecked = allChecked && initialChecked;
    let checkboxId = courseNameClean + "-" + assignmentNameClean;

    let lastTd = tableRow.querySelector("td:last-child");
    let dueDateE = lastTd.querySelector("time.submissionTimeChart--dueDate");
    let dueDate = dueDateE.getAttribute("datetime");
    // dueDate:"2023-09-09 23:59:00 -0400"
    let dueDateObj = moment(dueDate, "YYYY-MM-DD HH:mm:ss Z");
    // format like 8/7/2013 5:30 pm
    let dueDateOut = dueDateObj.format("MM/DD/YYYY hh:mm a");

    let tableRowCheckbox = document.createElement("td");
    let tableRowCheckboxInput = document.createElement("input");
    tableRowCheckboxInput.type = "checkbox";
    tableRowCheckboxInput.checked = initialChecked;
    tableRowCheckboxInput.classList.add("th-checkbox");
    tableRowCheckboxInput.classList.add("assignment-checkbox-jr");
    tableRowCheckboxInput.setAttribute("data-assignment-name", assignmentName);
    tableRowCheckboxInput.setAttribute(
      "data-assignment-clean",
      assignmentNameClean
    );
    tableRowCheckboxInput.setAttribute("data-course-name", courseName);
    tableRowCheckboxInput.setAttribute(
      "data-course-name-clean",
      courseNameClean
    );
    tableRowCheckboxInput.setAttribute("data-course-number", courseNumber);
    tableRowCheckboxInput.setAttribute("data-due-date", dueDateOut);

    tableRowCheckboxInput.id = checkboxId;
    tableRowCheckbox.appendChild(tableRowCheckboxInput);

    let tableRowCheckboxLabel = document.createElement("label");
    tableRowCheckboxLabel.setAttribute("for", checkboxId);
    tableRowCheckboxLabel.textContent = " Select";
    tableRowCheckbox.append(tableRowCheckboxLabel);

    tableRow.prepend(tableRowCheckbox.cloneNode(true));
  }

  document.querySelectorAll(".assignment-checkbox-jr").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      // save to session storage
      let checked = e.target.checked;
      saveCheckboxState(checkbox, checked);
    });
  });

  // --------------- Add to calendar button ---------------
  // Check if other courses have any checked & update noneChecked
  Object.keys(startState).forEach((i_courseNum) => {
    Object.keys(startState[i_courseNum]).forEach((i_assignmentNameClean) => {
      let i_assignmentState = startState[i_courseNum][i_assignmentNameClean];
      if (!i_assignmentState) {
        i_assignmentState = {};
      }
      let i_initialChecked = i_assignmentState["checked"] || false;
      noneChecked = noneChecked && !i_initialChecked;
      if (i_courseNum == courseNumber) {
        numChecked += i_initialChecked ? 1 : 0;
      } else {
        numCheckedOther += i_initialChecked ? 1 : 0;
      }
    });
  });

  let header = document.querySelector(".courseHeader");

  let flex = document.createElement("div");
  flex.classList.add("courseHeader--cal-flex");

  let span = document.createElement("span");
  span.textContent = "Create calendar file (across all courses)";

  let span2 = document.createElement("span");
  span2.textContent = "Remove all selected (across all courses)";

  let button = document.createElement("button");
  button.classList.add("tiiBtn");
  button.classList.add("tiiBtn-primary");
  button.classList.add("gs-cal-button");
  button.id = "gs-cal-button";
  button.disabled = noneChecked;
  button.append(span);

  let button2 = document.createElement("button");
  button2.classList.add("tiiBtn");
  button2.classList.add("tiiBtn-secondary");
  button2.classList.add("gs-cal-button");
  button2.id = "gs-cal-button2";
  button2.disabled = noneChecked;
  button2.append(span2);


  flex.append(button);
  flex.append(button2);

  header.append(flex);

  document.querySelector("#gs-cal-button").addEventListener("click", (e) => {
    let cal = ics();
    Object.keys(startState).forEach((i_courseNum) => {
      Object.keys(startState[i_courseNum]).forEach((i_assignmentNameClean) => {
        let i_assignmentState = startState[i_courseNum][i_assignmentNameClean];
        if (!i_assignmentState) {
          i_assignmentState = {};
        }
        let i_initialChecked = i_assignmentState["checked"] || false;
        if (i_initialChecked) {
          let i_courseName = i_assignmentState["courseName"];
          let i_dueDate = i_assignmentState["dueDate"];
          let i_assignmentName = i_assignmentState["assignmentName"];
          cal.addEvent(
            `GS: ${i_assignmentName} [${i_courseName}]`,
            `Course: ${i_courseName}\\nAssignment: ${i_assignmentName}\\nDueDate: ${i_dueDate}`,
            `https://www.gradescope.com/courses/${i_courseNum}`,
            i_dueDate.split(" ")[0],
            i_dueDate.split(" ")[0]
          );
        }
      });
    });
    let now = new Date();
    // format to YYYY-MM-DD--HH-mm
    let formattedDate = now.toISOString().split("T")[0];
    var formattedTime = "";
    if (now.getHours() > 12) {
      formattedTime = now.getHours() - 12 + "-" + (now.getMinutes()<10?'0':'') + now.getMinutes() + "-PM";
    } else {
      formattedTime = now.getHours() + "-" +  (now.getMinutes()<10?'0':'') + now.getMinutes() + "-AM";
    }
    cal.download("gradescope-calendar--" + formattedDate + "--" + formattedTime);
  });

  document.querySelector("#gs-cal-button2").addEventListener("click", (e) => {
    sessionStorage.removeItem("gs-cal");
    location.reload();
  });

  // --------------- Select all checkbox ---------------

  let tableHeader = document.querySelector(
    "#assignments-student-table > thead:nth-child(2) > tr:nth-child(1)"
  );

  let tableHeaderCheckbox = document.createElement("th");
  tableHeaderCheckbox.style.minWidth = "100px";
  let tableHeaderCheckboxInput = document.createElement("input");
  tableHeaderCheckboxInput.type = "checkbox";
  tableHeaderCheckboxInput.checked = allChecked;
  tableHeaderCheckboxInput.classList.add("th-checkbox");
  tableHeaderCheckboxInput.id = "th-checkbox";
  tableHeaderCheckbox.appendChild(tableHeaderCheckboxInput);

  let tableHeaderCheckboxLabel = document.createElement("label");
  tableHeaderCheckboxLabel.setAttribute("for", "th-checkbox");
  tableHeaderCheckboxLabel.textContent = " Select All";
  tableHeaderCheckbox.append(tableHeaderCheckboxLabel);

  tableHeader.prepend(tableHeaderCheckbox);

  document.querySelector("#th-checkbox").addEventListener("change", (e) => {
    let checked = e.target.checked;
    saveAllCheckboxState(checked);
  });
})();

const saveCheckboxState = (checkbox, checked) => {
  let sessionData = sessionStorage.getItem("gs-cal");
  if (!sessionData) {
    sessionData = { courseNumber: {} };
  } else {
    sessionData = JSON.parse(sessionData);
  }
  checkbox.checked = checked;
  let c_assignmentNameClean = checkbox.getAttribute(`data-assignment-clean`);
  let courseName = checkbox.getAttribute(`data-course-name`);
  let dueDate = checkbox.getAttribute(`data-due-date`);
  let assignmentName = checkbox.getAttribute(`data-assignment-name`);

  if (!sessionData[courseNumber]) {
    sessionData[courseNumber] = {};
  }
  if (!sessionData[courseNumber][c_assignmentNameClean]) {
    sessionData[courseNumber][c_assignmentNameClean] = {};
  }
  sessionData[courseNumber][c_assignmentNameClean]["checked"] = checked;
  sessionData[courseNumber][c_assignmentNameClean]["courseName"] = courseName;
  sessionData[courseNumber][c_assignmentNameClean]["dueDate"] = dueDate;
  sessionData[courseNumber][c_assignmentNameClean]["assignmentName"] =
    assignmentName;

  numChecked += checked ? 1 : -1;
  document.querySelector("#gs-cal-button").disabled = numChecked == 0 && numCheckedOther == 0;
  document.querySelector("#gs-cal-button2").disabled = numChecked == 0 && numCheckedOther == 0;

  sessionStorage.setItem("gs-cal", JSON.stringify(sessionData));
};

const saveAllCheckboxState = (checked) => {
  let boxes = document.querySelectorAll(".assignment-checkbox-jr");
  let sessionData = sessionStorage.getItem("gs-cal");
  if (!sessionData) {
    sessionData = { courseNumber: {} };
  } else {
    sessionData = JSON.parse(sessionData);
  }
  boxes.forEach((checkbox) => {
    checkbox.checked = checked;
    let c_assignmentNameClean = checkbox.getAttribute(`data-assignment-clean`);
    let courseName = checkbox.getAttribute(`data-course-name`);
    let dueDate = checkbox.getAttribute(`data-due-date`);
    let assignmentName = checkbox.getAttribute(`data-assignment-name`);

    if (!sessionData[courseNumber]) {
      sessionData[courseNumber] = {};
    }
    if (!sessionData[courseNumber][c_assignmentNameClean]) {
      sessionData[courseNumber][c_assignmentNameClean] = {};
    }
    sessionData[courseNumber][c_assignmentNameClean]["checked"] = checked;
    sessionData[courseNumber][c_assignmentNameClean]["courseName"] = courseName;
    sessionData[courseNumber][c_assignmentNameClean]["dueDate"] = dueDate;
    sessionData[courseNumber][c_assignmentNameClean]["assignmentName"] =
      assignmentName;
  });

  numChecked = checked ? boxes.length : 0;
  document.querySelector("#gs-cal-button").disabled = numChecked == 0 && numCheckedOther == 0;
  document.querySelector("#gs-cal-button2").disabled = numChecked == 0 && numCheckedOther == 0;


  sessionStorage.setItem("gs-cal", JSON.stringify(sessionData));
};

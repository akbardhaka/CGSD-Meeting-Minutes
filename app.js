document.getElementById("saveBtn").addEventListener("click", function () {
  const text = document.getElementById("meetingDetails").value;
  const blob = new Blob(["\ufeff" + text], { type: "application/msword" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "MeetingMinutes.docx";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

document.getElementById("shareBtn").addEventListener("click", function () {
  if (navigator.share) {
    const file = new File(["\ufeff" + document.getElementById("meetingDetails").value], "MeetingMinutes.docx", {
      type: "application/msword",
    });

    navigator.share({
      title: "Meeting Minutes",
      text: "Here are the meeting notes!",
      files: [file],
    }).catch((error) => console.error("Sharing failed", error));
  } else {
    alert("Sharing isn't supported on this browser.");
  }
});

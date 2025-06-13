document.getElementById("saveBtn").addEventListener("click", function () {
  const text = document.getElementById("meetingDetails").value;
  const blob = new Blob([text], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "MeetingMinutes.docx";
  link.click();
});

document.getElementById("shareBtn").addEventListener("click", function () {
  if (navigator.share) {
    navigator.share({
      title: "Meeting Minutes",
      text: "Check out these meeting notes!",
      files: [new File([document.getElementById("meetingDetails").value], "MeetingMinutes.docx", { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })]
    });
  } else {
    alert("Sharing is not supported on this browser.");
  }
});

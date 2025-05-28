

//confetti Test

const extension2 ={
    name: "extension2",
    type: "effect",
    match: ({trace })=> trace.type === "extension2" || trace.payload === "extension2",
    effect: ({})=>  {
      const canvas = document.querySelector('#confetti-canvas')

      var myConfetti = confetti.create(canvas,{
        resize: true,
        useWorker: true,
      })
      myConfetti({
        particleCount: 200,
        spread: 160,
      })
    }
  };

//Generate PDF function
const genPDF = {
        name: "genPDF",
        type: "effect",
        match: ({}) => trace.type === "genPDF" || trace.payload === "genPDF",
        effect: ({}) => {
                  window.generatePDF = async function () {
                    const { jsPDF } = window.jspdf;
                    const doc = new jsPDF();
                    doc.text("PDF erstellt über Voiceflow!", 10, 10);
                    doc.save("voiceflow.pdf");
                };
                 window.generatePDF();
        }
    };

export { extension2, genPDF };
